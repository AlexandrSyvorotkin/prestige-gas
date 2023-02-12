import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import WorkStages from "@/components/WorkStages/WorkStages";
import SliderMain from "@/components/SliderMain/SliderMain";


const Home = () => {
  return (
    <div>
        <SliderMain/>
        <WorkStages/>
    </div>
  )
}

export default Home
