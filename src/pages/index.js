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


const Home = () => {

    const scrollAbout = useRef(null)
    const scrollToWhy = useRef(null)
    const scrollToPrices = useRef(null)
    const scrollToStages = useRef(null)
    const scrollToReviews = useRef(null)
    const scrollToContacts = useRef(null)

    return (
        <>
            {/*<Header*/}
            {/*    scrollAbout={scrollAbout}*/}
            {/*    scrollToWhy={scrollToWhy}*/}
            {/*    scrollToPrices={scrollToPrices}*/}
            {/*    scrollToStages={scrollToStages}*/}
            {/*    scrollToReviews={scrollToReviews}*/}
            {/*    scrollToContacts={scrollToContacts}*/}
            {/*/>*/}
            {/*<div className={styles.header_wrapper}/>*/}
            {/*<SliderMain/>*/}
            {/*<AboutCompany scroll={scrollAbout}/> +*/}
            {/*<Why scroll={scrollToWhy}/> +*/}
            <Prices scroll={scrollToPrices}/>
            {/*<WorkStages scroll={scrollToStages}/> +*/}
            {/*<Reviews scroll={scrollToReviews}/>*/}
            {/*<Certificates /> +*/}
            {/*<Contacts scroll={scrollToContacts}/> +*/}
            {/*<Consultation /> +*/}
            {/*<OurWork/> +*/}
            {/*<Footer/> +*/}
        </>
    )
}

export default Home
