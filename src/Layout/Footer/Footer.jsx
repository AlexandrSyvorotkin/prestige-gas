import React from 'react';
import styles from './Footer.module.scss'
import LinksBlock from "@/components/LinksBlock/LinksBlock";
import Container from "@/Layout/Container/Container";
import FooterInfoBlock from "@/components/FooterInfoBlock/FooterInfoBlock";

const aboutCompanyLinks = [
    {id: 1, name: 'Услуги', path: ''},
    {id: 2, name: 'О компании', path: ''},
    {id: 3, name: 'Портфолио', path: ''},
    {id: 4, name: 'Контакты', path: ''},
]

const serviceLinks = [
    {id: 1, name: 'Отопление', path: ''},
    {id: 2, name: 'Водоснабжение', path: ''},
    {id: 3, name: 'Электика', path: ''},
]


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer_wrapper}>
                    <div  className={styles.links_wrapper}>
                        <LinksBlock title='О компании' links={aboutCompanyLinks}/>
                        <LinksBlock title='Услуги' links={serviceLinks}/>
                    </div>
                    <FooterInfoBlock/>
                </div>
                <p className={styles.footer_text}>2023 © Инженерный центр "Престиж Газ" оказывает полный спектр услуг по реализации различных инженерных систем. Все правы защищены</p>
            </Container>
        </footer>
    );
};

export default Footer;