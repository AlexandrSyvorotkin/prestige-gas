import React from 'react';
import styles from './Certificates.module.scss'
import Container from "@/Layout/Container/Container";
import Image from "next/image";

const certificates = [
    {id:1 , path: '/cercificates/75.jpeg'},
    {id:2 , path: '/cercificates/76.jpeg'},
]

const Certificates = () => {
    return (
        <section className={styles.certificates}>
            <Container>
                <div className={styles.certificates_content}>
                    <div className={styles.header}>
                        Наши сертификаты
                    </div>
                    <div className={styles.info}>
                        <span>Мастера рерулярно проходят обучение у официальных дилеров и поддерживают свои знания на высоком уровне. Чему свидетельствуют сертификаты ведущих производителей.</span>
                        <div className={styles.list_items}>
                            {certificates.map(it =>
                                <div key={it.id} className={styles.single_certificate}>
                                    <Image src={it.path} width='300' height='400'/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Certificates;