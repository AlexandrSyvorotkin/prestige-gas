import React from 'react';
import styles from './Certificates.module.scss'
import Container from "@/Layout/Container/Container";

const Certificates = () => {
    return (
        <section className={styles.certificates}>
            <Container>
                <div className={styles.certificates_content}>
                    <div className={styles.header}>
                        Наши сертификаты
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Certificates;