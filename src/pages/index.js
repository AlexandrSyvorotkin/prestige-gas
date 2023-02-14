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


const Home = () => {
  return (
    <div>
        <SliderMain/>
        <AboutCompany/>
        <Why/>
        <Prices/>
        <WorkStages/>
        <OurWork/>
        <BoilersSlider/>
        <Reviews/>
    </div>
  )
}

export default Home
