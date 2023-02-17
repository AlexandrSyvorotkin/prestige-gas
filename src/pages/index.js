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

    return (
        <>
            <Head>
                <title>Престиж Газ - компания по ремонту бытовой техники. Ремонт бытовой техники в Москве И МО.</title>
                <meta name='keywords'
                      content='Ремонт, мастер по ремонту бытовой техники, ремонт бытовой техники. Ремонт
                      газовых колонок, ремонт котлов, ремонт стиральных машинок, ремонт духовых шкафов, ремонт газовых плит, ремонт стиральных машинL
                      '
                />
                <meta name='description' content='Престиж Газ -  официальный сайт сервиса по ремонту бытовой техники в г.Москва'/>
                {/*<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>*/}
                {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>*/}
                {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>*/}
                {/*<link rel="manifest" href="/site.webmanifest"/>*/}
                {/*<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>*/}
                {/*<meta name="msapplication-TileColor" content="#7bbf2d"/>*/}
                {/*<meta name="theme-color" content="#ffffff"/>*/}
                {/*<meta name="yandex-verification" content="a3325a098ec95ee9" />*/}
            </Head>
            <Header
                scrollAbout={scrollAbout}
                scrollToWhy={scrollToWhy}
                scrollToPrices={scrollToPrices}
                scrollToStages={scrollToStages}
                scrollToReviews={scrollToReviews}
                scrollToContacts={scrollToContacts}
            />
            <div className={styles.header_wrapper}/>
            <main>
            <SliderMain/>
            <AboutCompany scroll={scrollAbout}/>
            <Why scroll={scrollToWhy}/>
            <Prices scroll={scrollToPrices}/>
            <WorkStages scroll={scrollToStages}/>
            <Certificates />
            <Contacts scroll={scrollToContacts}/>
            <Consultation />
            <OurWork/>
            </main>
            <Footer/>
        </>
    )
}

export default Home
