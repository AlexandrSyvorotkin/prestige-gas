import React from 'react';
import styles from './Contacts.module.scss'
import Container from "@/Layout/Container/Container";
import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';
import Heading from "@/Layout/Heading/Heading";
import {AiFillPhone, AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai";
import {BsTelegram} from 'react-icons/bs'

const mapData = {
    center: [55.75485126232091,37.885203400076044],
    zoom: 18,
};

const Contacts = ({scroll}) => {
    return (
        <section className={styles.contacts} ref={scroll}>
            <Container>
                <div className={styles.contacts_content}>
                    <div className={styles.header}>
                        <Heading text='Контакты' tag='h3'/>
                    </div>
                    <div className={styles.information}>
                        <div className={styles.map}>
                            <YMaps >
                                <Map defaultState={mapData} width='100%' height='100%'>
                                    <Placemark geometry={[55.75485126232091,37.885203400076044]}
                                    />
                                </Map>
                            </YMaps>
                        </div>
                        <div className={styles.contacts_detail}>
                            <div className={styles.contact_item}>
                                <a href='tel:+79772955933' className={styles.link}>
                                    <AiFillPhone size={40}/>
                                    <p>Номер телефона</p>
                                </a>
                            </div>
                            <div className={styles.contact_item}>
                                <AiOutlineMail size={40}/>
                                <p>prestigegas2023@gmail.com</p>
                            </div>
                            <a href='https://t.me/Prestige_Gas2023' className={styles.contact_item}>
                                <BsTelegram size={40}/>
                                <p>Telegram</p>
                            </a>
                            <div className={styles.contact_item}>
                                <a href='https://wa.link/8njo0s' className={styles.link}>
                                    <AiOutlineWhatsApp size={40}/>
                                    <p>WhatsApp</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contacts;