import React from 'react';
import styles from './Reviews.module.scss'
import Container from "@/Layout/Container/Container";

const Reviews = ({scroll}) => {
    return (
        <section className={styles.reviews} ref={scroll}>
            <Container>
                <div className={styles.reviews_content}>
                    <div className={styles.header}>
                        Отзывы
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Reviews;