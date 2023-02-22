import React, {useEffect, useState} from 'react';
import styles from './Footer.module.scss'
import LinksBlock from "@/components/LinksBlock/LinksBlock";
import Container from "@/Layout/Container/Container";
import FooterInfoBlock from "@/components/FooterInfoBlock/FooterInfoBlock";
import BtnMain from "@/UI/BtnMain/BtnMain";
import Link from "next/link";



const serviceLinks = [
    {id: 1, name: 'Отопление', path: ''},
    {id: 2, name: 'Водоснабжение', path: ''},
    {id: 3, name: 'Бытовая техника', path: ''},
]


const Footer = ({scrollAbout, scrollToContacts, scrollToPrices, scrollToReviews, scrollToStages, scrollToWhy}) => {

    const aboutCompanyLinks = [
        {id: 1, name: 'Цены', path: '', ref: scrollToPrices},
        {id: 2, name: 'О компании', path: '', ref: scrollAbout},
        {id: 3, name: 'Отзывы', path: '', ref: null},
        {id: 4, name: 'Контакты', path: '', ref: scrollToContacts},
    ]

    const [openModal, setOpenModal] = useState(false )

    const closeModalHandler = () => {
        setOpenModal(false)
    }


    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer_wrapper}>
                    <div  className={styles.links_wrapper}>
                        <LinksBlock title='О компании' links={aboutCompanyLinks}/>
                        <LinksBlock title='Услуги' links={serviceLinks}/>
                        <div className={styles.btns}>
                            <BtnMain><a href='/прайс-лист.pdf' target='_blank'>Скачать прайс-лист</a></BtnMain>
                            <BtnMain onClick={() => setOpenModal(true)}>Консультация</BtnMain>
                        </div>
                    </div>
                    <FooterInfoBlock openModal={openModal} setOpenModal={setOpenModal}/>
                </div>
                <p className={styles.footer_text}>2023 © Инженерный центр "Престиж Газ" оказывает полный спектр услуг по реализации различных инженерных систем. Все правы защищены</p>
            </Container>
        </footer>
    );
};

export default Footer;