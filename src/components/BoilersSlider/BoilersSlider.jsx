import React from 'react';
import styles from './BoilersSlider.module.scss'
import Container from "@/Layout/Container/Container";

import {Pagination, Navigation, Autoplay, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from "next/image";

const array = [
    {id: 1, img: '/boilers/logo1-min.png'},
    {id: 2, img: '/boilers/logo2-min.png'},
    {id: 3, img: '/boilers/logo3-min.png'},
    {id: 4, img: '/boilers/logo4-min.png'},
]

const BoilersSlider = () => {
    return (
        <section className={styles.boilers_slider}>
            <Container>
                <div className={styles.sliders}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, Scrollbar]}
                        slidesPerView={3}
                        freeMode={true}
                        loop={true}
                    >
                        {array.map(boiler =>
                            <SwiperSlide key={boiler.id}>
                                    <Image src={boiler.img} width='380' height='70'/>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};

export default BoilersSlider;