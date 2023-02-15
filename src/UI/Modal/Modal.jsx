import React, {useState} from 'react';
import styles from './Modal.module.scss'
import Image from "next/image";
import {useForm} from "react-hook-form";

const Modal = ({setOpenModal}) => {
    const [succes, setSucces] = useState(false)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('+7')
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({
        mode: 'onBlur'
    })


    // const onSubmit = (data) => {
    //     axios.post(url, {
    //         name: name,
    //         phone: number,
    //         type: type,
    //         id: id,
    //         adress: address
    //     }, {
    //         headers: {'Content-Type': 'application/json'},
    //     }).then((response => {
    //         //console.log(response.data)
    //         reset()
    //         setSucces(true)
    //         setTimeout(() => {
    //             setSucces(false)
    //         }, 3000)
    //         clearTimeout()
    //     })).catch((error) => {
    //         //console.log(error)
    //     })
    //
    // }


    const [email, setEmail] = useState('')

    return (
        <div className={styles.backdrop} onClick={() => setOpenModal(false)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <span>Заказать звонок</span>
                    <div onClick={() => setOpenModal(false)}>
                        <Image src='/closeModal.png' width='25' height='25'/>
                    </div>
                </div>
                <form  className={styles.form}>
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
                            }
                        })}
                        className={styles.input}
                        placeholder='E-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {succes && <p className={styles.success}>Заявка успешно отправлена</p>}
                    <input type="submit" className={styles.submit_btn}/>
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