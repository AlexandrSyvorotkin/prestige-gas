import React from 'react';
import styles from './Contacts.module.scss'
import Container from "@/Layout/Container/Container";
import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';

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
                        Контакты
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
                                <p>Номер телефона</p>
                                <p>+7 (977) 295-59-33</p>
                            </div>
                            <div className={styles.contact_item}>
                                <p>Почта</p>
                                <p>prestigegas2023@gmail.com</p>
                            </div>
                            <div className={styles.contact_item}>
                                <p>Telegram</p>
                            </div>
                            <div className={styles.contact_item}>
                                <p>Watsup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contacts;