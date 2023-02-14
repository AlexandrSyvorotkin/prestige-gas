import React from 'react';
import styles from './Contacts.module.scss'
import Container from "@/Layout/Container/Container";

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <Container>
                <div className={styles.contacts_content}>
                    <div className={styles.header}>
                        Контакты
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contacts;