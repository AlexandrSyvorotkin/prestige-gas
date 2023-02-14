import React from 'react';
import styles from './Contacts.module.scss'
import Container from "@/Layout/Container/Container";
import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';

const mapData = {
    center: [55.75485126232091,37.885203400076044],
    zoom: 18,
};

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <Container>
                <div className={styles.contacts_content}>
                    <div className={styles.header}>
                        Контакты
                    </div>
                    <div className={styles.information}>
                        <div className={styles.map}>
                            <YMaps>
                                <Map defaultState={mapData} width='800px' height='80%'>
                                    <Placemark geometry={[55.75485126232091,37.885203400076044]}
                                               options={{
                                                   iconLayout: 'default#image',
                                                   iconImageHref: '/different/placemark.png',
                                                   iconImageSize: [93, 95],
                                                   iconImageOffset: [-60, -100]
                                               }}
                                    />
                                </Map>
                            </YMaps>
                        </div>
                        <div className={styles.contacts_detail}>
                            <div>
                                <p>Номер телефона</p>
                            </div>
                            <div>
                                <p>Почта</p>
                            </div>
                            <div>
                                <p>Telegram</p>
                            </div>
                            <div>
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