import React from 'react';
import styles from './WorkStages.module.scss'
import bg from '../../../public/workStagesbg.png'
import Container from "@/Layout/Container/Container";
import Image from "next/image";

const stages = [
    {id: 1, img: '/work_stages/icon2-min.png', title: 'Проектирование', description: 'Разработка система отопления, водоснабжения, газификации и других инженерных систем с учетом всех особенностей обьекта'},
    {id: 2, img: '/work_stages/icon3-min.png', title: 'Поставка', description: 'Продажа и доставка на обьект всех необходимых материалов и оборудования для реализации проекта инженерных систем.'},
    {id: 3, img: '/work_stages/icon4-min.png', title: 'Монтаж', description: 'Сертифицированные специалисты компании проведут установку оборудования, проведут необходимые коммуникации систем.'},
]


const WorkStages = () => {
    return (
        <section className={styles.work_stages} style={{
            backgroundImage: `url(${bg.src})`,
            width: '100%',
            height: '100%',
        }}>
            <Container>
                <div className={styles.work_stages_wrapper}>
                    <div className={styles.header}>
                        <span >Этапы работы</span>
                    </div>
                    <div className={styles.stages}>
                        {stages.map(stage =>
                            <div className={styles.stage}>
                                <div>
                                    <Image src={stage.img} width='140' height='140'/>
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
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WorkStages;