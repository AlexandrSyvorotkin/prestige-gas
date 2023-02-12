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
                            <span>Тепло</span> вашего дома - <br/> наша забота!
                        </p>
                        <div className={styles.text_description}>
                            <div className={styles.dots}>
                                <div className={styles.ball}/>
                                <p className={styles.dots_text}>
                                    <span>- Проектирование и монтаж систем отопления:</span><br/>
                                    радиаторное отопление, теплые полы, конвекторы;
                                </p>
                            </div>
                            <div className={styles.dots}>
                                <div className={styles.ball}/>
                                <p className={styles.dots_text}>
                                    <span>-Проектирования и монтаж котельных:</span><br/>
                                    газовые, котельные, электрические котельные, твердотопливные
                                    котельные, котельные на жидком топливе, тепловые насосы
                                </p>
                            </div>
                            <div className={styles.dots}>
                                <div className={styles.ball}/>
                                <p className={styles.dots_text}>
                                    <span>-Ремонт газового/элшектрического оборудования</span><br/>
                                </p>
                            </div>
                        </div>
                        <div className={styles.btn_wrapper}>
                            <BtnSecondary>Подробнее</BtnSecondary>
                        </div>

                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default SliderMain;
