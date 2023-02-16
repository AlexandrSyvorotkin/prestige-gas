import React from 'react';
import styles from './PriceItem.module.scss'
import Image from "next/image";

const PriceItem = ({img, title, price}) => {
    return (
        <div className={styles.price_item}>
                <div className={styles.img_container}>
                    <Image src={img} layout='fill' alt=''/>
                </div>
            <p className={styles.price}>От <span>{price}</span> руб</p>
            <div className={styles.title}>
                <span>{title}</span>
            </div>
        </div>
    );
};

export default PriceItem;