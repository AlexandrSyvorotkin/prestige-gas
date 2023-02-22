import React from 'react';
import styles from './Reviews.module.scss'
import Container from "@/Layout/Container/Container";
import Heading from "@/Layout/Heading/Heading";

const Reviews = ({scroll}) => {
    return (
        <section className={styles.reviews} ref={scroll}>
            <Container>
                <div className={styles.reviews_content}>
                    <div className={styles.header}>
                        <Heading tag='h3' text='Отзывы'/>
                    </div>
                    <p></p>
                </div>
            </Container>
        </section>
    );
};

export default Reviews;