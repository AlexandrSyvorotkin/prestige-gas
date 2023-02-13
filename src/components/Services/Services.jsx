import React from 'react';
import styles from './Services.module.scss'
import Image from "next/image";
import Container from "@/Layout/Container/Container";



const Services = () => {
    return (
        <section className={styles.services}>
            <Container>
                <div className={styles.header}>
                    Услуги
                </div>
                <div className={styles.services_wrapper}>
                    <div className={styles.service}>
                        <span className={styles.description}>
                            Водоснабжение
                        </span>
                        <Image src='/services/cat2-min.png' width='400' height='300'/>
                    </div>
                    <div className={styles.service}>
                        <span className={styles.description}>
                            Стиральные машины
                        </span>
                        <Image src='/services/cat3-min.png' width='400' height='300'/>
                    </div>
                    <div className={styles.service}>
                        <span className={styles.description}>
                            Духовые шкафы
                        </span>
                        <Image src='/services/cat4-min.png' width='400' height='300'/>
                    </div>
                    <div className={styles.service}>
                        <span className={styles.description}>
                            Электрические, газовые плиты
                        </span>
                        <Image src='/services/cat5-min.png' width='400' height='300'/>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Services;