import React from 'react';
import styles from './OurWork.module.scss'
import Container from "@/Layout/Container/Container";
import Image from "next/image";
import Heading from "@/Layout/Heading/Heading";
import {Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const works = [
    {id: 1, img: '/works/work1.jpeg'},
    {id: 2, img: '/works/work2.jpeg'},
    {id: 3, img: '/works/work3.jpeg'},
    {id: 4, img: '/works/work4.jpeg'},
    {id: 5, img: '/works/work5.jpeg'},
    {id: 6, img: '/works/work6.jpeg'},
    {id: 7, img: '/works/work7.jpeg'},
    {id: 8, img: '/works/work8.jpeg'},
    {id: 9, img: '/works/work9.jpeg'},
    {id: 10, img: '/works/work10.jpeg'},
    {id: 11, img: '/works/work11.jpeg'},
]

const OurWork = () => {
    return (
        <section className={styles.our_work}>
            <Container>
                <div className={styles.header}>
                    <Heading text='Наши работы' tag='h3'/>
                </div>
                <div className={styles.works}>
                    {/*<Swiper*/}
                    {/*    modules={[Pagination, Autoplay, Scrollbar, Navigation]}*/}
                    {/*    // spaceBetween={50}*/}
                    {/*    slidesPerView={4}*/}
                    {/*    scrollbar={{draggable: true}}*/}
                    {/*    loop={true}*/}
                    {/*    navigation*/}
                    {/*    // autoplay={{delay: 7000, disableOnInteraction: false}}*/}
                    {/*>*/}
                    {/*    <div className={styles.slides}>*/}
                    {/*        {works.map(it =>*/}
                    {/*            <SwiperSlide key={it.id}>*/}
                    {/*                <Image src={it.img} width='300' height='400' alt=''/>*/}
                    {/*            </SwiperSlide>*/}
                    {/*        )}*/}
                    {/*    </div>*/}

                    {/*</Swiper>*/}
                    {works.map(it =>
                            <Image src={it.img} width='300' height='400' alt='' key={it.id}/>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default OurWork;