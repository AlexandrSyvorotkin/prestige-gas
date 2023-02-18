import React from 'react';
import styles from './Why.module.scss'
import Container from "@/Layout/Container/Container";
import bg from "../../../public/workStagesbg.png";
import Image from "next/image";
import Heading from "@/Layout/Heading/Heading";
import {ImMan} from "react-icons/im";
import {AiTwotoneCar} from "react-icons/ai";
import {BsCalendar2Day, BsTruck} from "react-icons/bs";
import {MdOutlineLocalLaundryService, MdOutlinePriceChange} from "react-icons/md";

const stages = [
    {
        id: 1,
        // img: '/work_stages/icon2-min.png',
        img: <ImMan size={70} style={{backgroundColor: 'white'}}/>,
        title: 'Высококвалифицированный персонал',
        description: 'Наши мастера регулярно проходят повышение квалификации у производителей оборудования.'
    },
    {
        id: 2,
        // img: '/work_stages/icon2-min.png',
        img: <BsTruck size={70} style={{color: 'white'}}/>,
        title: 'Оперативный выезд',
        description: 'К вам приезжает мастер спустя час. 24/7.'
    },
    {
        id: 3,
        // img: '/work_stages/icon2-min.png',
        img: <BsCalendar2Day size={70} style={{color: 'white'}}/>,
        title: 'Ремонт день в день',
        description: 'Мастер не берет следующий заказ пока не закончит текующий.'
    },
    {
        id: 4,
        // img: '/work_stages/icon2-min.png',
        img: <MdOutlinePriceChange size={70} style={{color: 'white'}}/>,
        title: 'Фиксированная цена',
        description: 'Вы получаете окончательную цену при выезде мастера.'
    },
    {
        id: 5,
        // img: '/work_stages/icon2-min.png',
        img: <MdOutlineLocalLaundryService size={70} style={{color: 'white'}}/>,
        title: 'Гарантия оборудования до 3 лет.',
        description: 'Гарантия распространяется как на оборудование так и на работы.'
    },
]


const Why = ({scroll}) => {
    return (
        <section ref={scroll} className={styles.work_stages} style={{
            backgroundImage: `url(${bg.src})`,
            // width: '100%',
            // height: '100%',
        }}>
            <Container>
                <div className={styles.work_stages_wrapper}>
                    <div className={styles.header}>
                         <Heading tag='h3' text='Почему выбирают нас'/>
                    </div>
                    <div className={styles.stages}>
                        {stages.map(stage =>
                            <div className={styles.stage} key={stage.id}>
                                <div>
                                    {stage.img}
                                    {/*<Image src={stage.img} width='140' height='140' alt=''/>*/}
                                </div>
                                <div className={styles.title}>
                                    {stage.title}
                                </div>
                                <p className={styles.description}>{stage.description}</p>
                            </div>
                        )}
                    </div>
                    <div className={styles.stages_arrow}>
                        <div className={styles.ball}>
                            <span>1</span>
                        </div>
                        <div className={styles.dashed}/>
                        <div className={styles.ball}>
                            <span>2</span>
                        </div>
                        <div className={styles.dashed}/>
                        <div className={styles.ball}>
                            <span>3</span>
                        </div>
                        <div className={styles.dashed}/>
                        <div className={styles.ball}>
                            <span>4</span>
                        </div>
                        <div className={styles.dashed}/>
                        <div className={styles.ball}>
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Why;