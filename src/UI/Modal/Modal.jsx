import React, {useState} from 'react';
import styles from './Modal.module.scss'
import Image from "next/image";
import {useForm} from "react-hook-form";
import axios from "axios";

const Modal = ({setOpenModal}) => {
    const [succes, setSucces] = useState(false)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('+7')
    const [mail, setMail] = useState('')
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({
        mode: 'onBlur'
    })

    const CHATID = "-597665986"
    const tg_bot_tocken = '6250734764:AAEAMqcxfbrCp4R7kXJ3dnf4eYqIZzqldM0'
    const url_api = `https://api.telegram.org/bot${ tg_bot_tocken }/sendMessage`


    const onSubmit = (data) => {
        // alert(JSON.stringify(data))

        let message = `<b> Заявка с сайта! </b>`;
        message += `<b>Отправитель: </b> ${name}\n`
        message += `<b>Номер телефона: </b> ${number}\n`
        message += `<b>Почта: </b> ${mail}\n`

        axios.post(url_api, {
            chat_id: CHATID,
            parse_mode: 'html',
            text: message,
        })
        setSucces(true)
    }


    return (
        <div className={styles.backdrop} onClick={() => setOpenModal(false)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <span>Заказать звонок</span>
                    <div onClick={() => setOpenModal(false)} className={styles.close}>
                        <Image src='/closeModal.png' width='25' height='25' alt=''/>
                    </div>
                </div>
                <form  className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder='Имя'
                        maxLength={20}
                        {...register('name', {
                            required: 'Поле обязательно к заполнению',
                            value: name,
                            onChange: (e) => setName(e.target.value)
                        })}
                    />
                    {errors?.name && <p className={styles.errors}>{errors?.name?.message || 'Ошибка'}</p>}
                    <input
                        className={styles.input}
                        type="tel"
                        placeholder='Телефон'
                        maxLength={12}
                        {...register('phone', {
                            required: 'Поле обязательно к заполнению',
                            minLength: {
                                value: 1,
                                message: 'Введите корректный номер'
                            },
                            maxLength: {
                                value: 12,
                                message: 'Введите номер телефона через +7'
                            },

                            value: number,
                            onChange: (e) => setNumber(e.target.value)
                        })}
                    />
                    {errors?.phone && <p className={styles.errors}>{errors?.phone?.message || 'Ошибка'}</p>}
                    <input
                        {...register('email', {
                            required: 'Введите корректную почту',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Введите корректный email'
                            },
                                value: mail,
                            onChange: (e) => setMail(e.target.value)
                        })}
                        className={styles.input}
                        placeholder='E-mail'
                    />
                    <input type="submit" className={styles.submit_btn}/>
                    {succes && <p className={styles.success}>Заявка успешно отправлена</p>}
                </form>
                {/*<div className={styles.footer}>*/}
                {/*    <p>Отправляя заявку, вы выражаете согласие на*/}
                {/*        <Link href='/privacy-policy'><a target='_blank' rel='noreferrer noopener'*/}
                {/*        > обработку персональных данных</a></Link>*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Modal;