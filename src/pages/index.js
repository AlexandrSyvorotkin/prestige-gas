import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
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


const Home = () => {
  return (
    <div>
        <SliderMain/>
        <AboutCompany/>
        <Why/>
        <Prices/>
        <WorkStages/>
        <Reviews/>
        <Certificates/>
        <Contacts/>
        <OurWork/>

    </div>
  )
}

export default Home
