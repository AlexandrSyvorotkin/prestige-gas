import React from 'react';
import styles from './PriceItem.module.scss'
import Image from "next/image";

const PriceItem = ({img, title, price}) => {
    return (
        <div className={styles.price_item}>
            <div className={styles.img}>
                <Image src={img} width='625' height='265' alt=''/>
                <p className={styles.price}>От <span>{price}</span> руб</p>
            </div>
            <div className={styles.title}>
                <span>{title}</span>
            </div>
        </div>
    );
};

export default PriceItem;