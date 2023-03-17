import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import WorkStages from "@/components/WorkStages/WorkStages";
import SliderMain from "@/components/SliderMain/SliderMain";
import AboutCompany from "@/components/AboutCompany/AboutCompany";
import Prices from "@/components/Prices/Prices";
import OurWork from "@/components/OurWork/OurWork";
import BoilersSlider from "@/components/BoilersSlider/BoilersSlider";
import Reviews from "@/components/Reviews/Reviews";
import Why from "@/components/Why/Why";
import Certificates from "@/components/Certificates/Certificates";
import Contacts from "@/components/Contacts/Contacts";
import Consultation from "@/components/Consultation/Consultation";
import React, {useRef} from "react";
import Header from "@/Layout/Header/Header";
import Footer from "@/Layout/Footer/Footer";
import SideBarMenu from "@/components/SideBarMenu/SideBarMenu";


const Home = () => {

    const scrollAbout = useRef(null)
    const scrollToWhy = useRef(null)
    const scrollToPrices = useRef(null)
    const scrollToStages = useRef(null)
    const scrollToReviews = useRef(null)
    const scrollToContacts = useRef(null)
    const scrollToTop = useRef(null)

    return (
        <>
            <Head>
                <title>Престиж Газ - компания по ремонту бытовой техники. Ремонт бытовой техники в Москве И МО.</title>
                <meta name='keywords'
                      content='Ремонт, мастер по ремонту бытовой техники, ремонт бытовой техники. Ремонт
                      газовых колонок, ремонт котлов, ремонт стиральных машинок, ремонт духовых шкафов, ремонт газовых плит, ремонт стиральных машин
                      Ремонт газовой колонки aeg, Ремонт газовой колонки Bosh, Ремонт газовой колонки zanussi, Ремонт газовой колонки beretta , Ремонт газовой колонки ferroli
                      Ремонт газовой колонки Baxi,Ремонт газовой колонки Mora , Ремонт газовой колонки Haier ,Ремонт газовой колонки Ariston ,Ремонт газовой колонки superlux
                      Ремонт газовых котлов , Ремонт газового котла vaillant ,Ремонт газового котла Лемакс, Ремонт газового котла Baxi, Ремонт газового котла ariston, Ремонт газового котла Navien
                      Ремонт газового котла protherm, Ремонт газового котла beretta, Ремонт газового котла bosh, Ремонт газового котла Buderus, Ремонт газового котла vaillant,Ремонт газового котла Viessmann
                      Ремонт газового котла конорд, Ремонт газового котла сиберия , Ремонт газового котла ferroli , Ремонт газового котла мимакс , Ремонт газового котла Electrolux, Ремонт газового котла боринские
                      Ремонт газового котла kiturami, Ремонт газового котла Immergas, Ремонт газового котла de Dietrich, Ремонт газового котла Жмз, Ремонт газового котла Rinnai, Ремонт газового котла thermona
                      Ремонт газового котла балтгаз, Ремонт газового котла oasis, Ремонт газового котла fondital, Ремонт газового котла mora, Ремонт газового котла Federica Bugatti, Ремонт газового котла Печкин
                      Ремонт бойлера zanussi, Ремонт бойлера ariston, Ремонт бойлера thermex, Ремонт бойлера gorenie, Ремонт бойлера bosh, Ремонт бойлера Baxi, Ремонт бойлера timberk, Ремонт бойлера Electrolux
                      Ремонт бойлера stiebel eltron, Ремонт бойлера drazice, Ремонт бойлера aeg, Ремонт бойлера royal, Капает бойлер, Из бойлера неприятный запах, Замена анода бойлера, Замена тэна бойлера
                      Бойлер не греет, Бойлер не включается, Установка бойлера, Установка косвенного бойлера, Демонтаж бойлера, Демонтаж косвенного бойлера, Вышибает пробки бойлер, Ремонт духового шкафа
                      Ремонт духового шкафа Bosh, Ремонт духового шкафа gorenie, Ремонт духового шкафа gefest, Ремонт духового шкафа Electrolux, Ремонт духовно шкафа hotpoint ariston, Ремонт духового шкафа Siemens
                      Ремонт духового шкафа de longhi, Ремонт духового шкафа maunfeld, Ремонт духового шкафа weissagauff, Ремонт духового шкафа lex, Ремонт духового шкафа hansa, Ремонт духового шкафа beko
                      Духовой шкаф вышибает пробки,  Духового шкаф настройка часов, Духовой шкаф не греет, Духовой шкаф не работает панель, Духовой шкаф замена стекла, Духовой шкаф не работает вентилятор, Духовой шкаф замена петлей
                      Монтаж настенного котла, Монтаж напольного котла, Монтаж гидравлической части котельной, Монтаж радиатора, Монтаж теплого Пола, Монтаж системы отопления, Монтаж бойлера косвенного нагрева
                      Монтаж колодезного насоса, Ремонт варочный панелей, Ремонт холодильников, Ремонт стиральных машин, Ремонт посудомоечных машин, Замена косвенного бойлера, Замена колодезного насоса, Замена варочной панели
                      Неприятный запах стиральной машины, Стиральная машина не крутит, Стиральная машина дребезжит, Стиральная машина не включается
                      '
                />
                <meta name="yandex-verification" content="680236842ca9cc18" />
                <meta name='robots' content='all'/>
                <meta name='description'
                      content='Престиж Газ -  официальный сайт сервиса по ремонту бытовой техники в г.Москва'/>
                <link rel="apple-touch-icon" sizes="50x50" href="/favicon/favicon.png"/>
                <link rel="icon" type="image/png" sizes="50x50" href="/favicon/favicon.png"/>
                <link rel="icon" type="image/png" sizes="50x50" href="/favicon/favicon.png"/>
                {/*яндекс верификация*/}
                <meta name="yandex-verification" content="a1d001c1bf4fd26c" />
                <script src="//code.jivo.ru/widget/tUxY8T8KtS" async></script>
            </Head>
            <Header
                scrollAbout={scrollAbout}
                scrollToWhy={scrollToWhy}
                scrollToPrices={scrollToPrices}
                scrollToStages={scrollToStages}
                scrollToReviews={scrollToReviews}
                scrollToContacts={scrollToContacts}
                scrollToTop={scrollToTop}
            />
            <div className={styles.header_wrapper}/>
            <main>
                <SliderMain/>
                <AboutCompany scroll={scrollAbout}/>
                <Why scroll={scrollToWhy}/>
                <Prices scroll={scrollToPrices}/>
                <WorkStages scroll={scrollToStages}/>
                <Certificates/>
                <Contacts scroll={scrollToContacts}/>
                {/*<Reviews/>*/}
                <Consultation/>
                <OurWork/>
            </main>
            <Footer scrollAbout={scrollAbout}
                    scrollToWhy={scrollToWhy}
                    scrollToPrices={scrollToPrices}
                    scrollToStages={scrollToStages}
                    scrollToReviews={scrollToReviews}
                    scrollToContacts={scrollToContacts}
            />
        </>
    )
}

export default Home
