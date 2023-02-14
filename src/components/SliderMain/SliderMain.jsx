import React from 'react';
import styles from './SliderMain.module.scss'
import {Pagination, Navigation, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from "next/image";
import BtnSecondary from "@/UI/BtnSecondary/BtnSecondary";

const slides = [
    {id: 1, img: '/bgmain/bgmain.png'},
    {id: 2, img: '/bgmain/bgsecondary.png'},
]

//TODO: Исправить слайдер

const SliderMain = () => {
    return (
        <section>
            <div className={styles.wrapper}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    autoplay={{delay: 7000, disableOnInteraction: false}}
                >
                    {slides.map((img, i) =>
                        <SwiperSlide key={i}>
                            <>
                                <Image
                                    src={img.img}
                                    layout='responsive'
                                    objectFit='cover'
                                    objectPosition='center'
                                    width={1600}
                                    height={704}
                                    quality={100}
                                />
                            </>
                        </SwiperSlide>
                    )}
                    <div className={styles.description}>
                        <p className={styles.text}>
                            Гарантировано отремонтируйте промышленное оборудование или бытовую технику за 1 день. Получите гарантию на сертифицированное оборудование до 3-х лет.
                        </p>
                        <div className={styles.text_description}>
                            <div className={styles.dots}>
                                <div className={styles.ball}/>
                                <p className={styles.dots_text}>
                                    Профессиональная обслуживающая - монтажная компания
                                </p>
                            </div>
                            <div className={styles.dots}>
                                <div className={styles.ball}/>
                                <p className={styles.dots_text}>
                                    Сэкономьте на эксплуатации бытовой и промышленной техники до 3-х месячных зарплат
                                    Закажи бесплатную консультацию по возникшей проблеме и получи скидку на первое обращение
                                </p>
                            </div>
                        </div>
                        <div className={styles.btn_wrapper}>
                            <BtnSecondary>Бесплатная консультация</BtnSecondary>
                        </div>

                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default SliderMain;
