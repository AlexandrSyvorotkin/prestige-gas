import React, {useState} from 'react';
import styles from './Consultation.module.scss'
import Container from "@/Layout/Container/Container";
import BtnWhite from "@/UI/BtnWhite/BtnWhite";
import Modal from "@/UI/Modal/Modal";
import bg from "../../../public/question.png";

const Consultation = () => {
    const [openModal, setOpenModal] = useState(false )

    return (
        <section className={styles.consultation} style={{
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: 'no-repeat'
            // width: '100%',
            // height: '100%',>
        }}>
            <Container>
                <div className={styles.consultation_content}>
                    <div className={styles.info}>
                        <span>Нужна <br/> консультация</span>
                        <p>Для получения подробной информации о стоимости, наличии и прочих услугах,<br/> пожалуйста, обращайтесь к нашим менеджерам.</p>
                    </div>
                    <div className={styles.btn}>
                        <BtnWhite onClick={() => setOpenModal(true)}>Задать вопрос</BtnWhite>
                    </div>
                    {openModal ? <Modal setOpenModal={setOpenModal}/> : null}
                </div>
            </Container>
        </section>
    );
};

export default Consultation;