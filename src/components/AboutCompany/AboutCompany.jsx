import React from 'react';
import styles from './AboutCompany.module.scss'
import Image from "next/image";
import Container from "@/Layout/Container/Container";
import Heading from "@/Layout/Heading/Heading";

const AboutCompany = ({scroll}) => {
    return (
        <section className={styles.about_company} ref={scroll}>
            <Container>
                <div className={styles.header}>
                    <Heading tag='h3' text='О компании'/>
                </div>
                <div className={styles.description}>
                    <div className={styles.description_txt}>
                        <p>
                            Наша компания выполняет работы по монтажу, сервисному обслуживанию, ремонту и подбору всех видов котельного оборудования.
                            Мы предлагаем воспользоваться полным спектром нашим услуг, а также предлагаем отопительные котлы и другое отопительное оборудование ведуших производителей газового оборудования.
                        </p>
                        <p>Компания "Престиж Газ" дорожит долгосрочными партнерскими отношениями с нашими клиентами.
                            Услуги ремонтных работ, диагностики или сервисного обслуживания производятся опытными, отвественными инженерами прошедшими обучение по газу и данными видами оборудования.
                        </p>
                        <p>Мы гарантируем клиенту добросовестное отношение к работе и качество выполнение работ.</p>
                        <p>
                            <span className={styles.black}> Получатель:</span> Витов Сергей Алексеевич <br/>
                            <span className={styles.black}>Номер счёта:</span> 40817810840100114689 <br/>
                            <span className={styles.black}>Банк получателя:</span> ПАО СБЕРБАНК <br/>
                            <span className={styles.black}>БИК:</span> 044525225 <br/>
                            <span className={styles.black}>Корр. счёт:</span> 30101810400000000225 <br/>
                            <span className={styles.black}>ИНН:</span> 7707083893 <br/>
                           <span className={styles.black}> КПП:</span> 773643002 <br/>
                        </p>
                    </div>
                    <Image src='/photo_bg_about/photo6-min.png' width='625' height='625' layout='responsive' alt=''/>
                </div>
            </Container>
        </section>
    );
};

export default AboutCompany;