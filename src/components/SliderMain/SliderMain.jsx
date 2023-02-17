import React, {useState} from 'react';
import styles from './SliderMain.module.scss'
import {Pagination, Navigation, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from "next/image";
import BtnSecondary from "@/UI/BtnSecondary/BtnSecondary";
import Modal from "@/UI/Modal/Modal";

const slides = [
    {id: 1, img: '/bgmain/bgmain.png'},
    {id: 2, img: '/bgmain/bgsecondary.png'},
]

//TODO: Исправить слайдер

const SliderMain = () => {

    const [openModal, setOpenModal] = useState(true)

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
                            <div className={styles.img_container}>
                                <Image
                                    src={img.img}
                                    layout='fill'
                                    objectPosition='cover'
                                    quality={100}
                                    alt=''
                                />
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className={styles.description}>
                    <h1 className={styles.text}>
                        <span>Тепло</span> вашего дома - <br/> наша забота!
                    </h1>
                    <div className={styles.text_description}>
                        <div className={styles.dots}>
                            <div className={styles.ball}/>
                            <h2 className={styles.dots_text}>
                                Гарантировано отремонтируйте промышленное оборудование или бытовую технику за 1 день. Получите гарантию на сертифицированное оборудование до 3-х лет.
                            </h2>
                        </div>
                        <div className={styles.dots}>
                            <div className={styles.ball}/>
                            <h2 className={styles.dots_text}>
                                Профессиональная обслуживающая - монтажная компания
                            </h2>
                        </div>
                        <div className={styles.dots}>
                            <div className={styles.ball}/>
                            <h2 className={styles.dots_text}>
                                Сэкономьте на эксплуатации бытовой и промышленной техники до 3-х месячных зарплат
                                Закажи бесплатную консультацию по возникшей проблеме и получи скидку на первое обращение
                            </h2>
                        </div>
                    </div>
                    <div className={styles.btn_wrapper}>
                        <BtnSecondary onClick={() => setOpenModal(true)}>Бесплатная консультация</BtnSecondary>
                    </div>
                    {openModal ? <Modal setOpenModal={setOpenModal}/> : null}
                </div>
            </div>
        </section>
    );
};

export default SliderMain;
