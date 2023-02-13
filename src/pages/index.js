import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import WorkStages from "@/components/WorkStages/WorkStages";
import SliderMain from "@/components/SliderMain/SliderMain";
import Services from "@/components/Services/Services";
import AboutCompany from "@/components/AboutCompany/AboutCompany";


const Home = () => {
  return (
    <div>
        <SliderMain/>
        <AboutCompany/>
        <WorkStages/>
        <Services/>
    </div>
  )
}

export default Home
