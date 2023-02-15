import React from 'react';
import styles from './FooterInfoBlock.module.scss'
import Image from "next/image";
import BtnMain from "@/UI/BtnMain/BtnMain";

const FooterInfoBlock = () => {
    return (
        <div className={styles.footer_info_block}>
            <div className={styles.info_block_section}>
                <div className={styles.info_item}>
                    <Image src='/footer_logos/ic-locat.png' width='13' height='15'/>
                    <span>Адрес</span>
                </div>
                <div className={styles.info_item}>
                    <Image src='/footer_logos/icon8-min.png' width='30' height='30'/>
                    <span>Телефон: +7 (977) 295-59-33</span>
                </div>
            </div>
            <div className={styles.info_block_section}>
                <div className={styles.info_item}>
                    <Image src='/footer_logos/ic-mail.png' width='20' height='13'/>
                    <span>Почта prestigegas2023@gmail.com</span>
                </div>
                <BtnMain>Заказать звонок</BtnMain>
            </div>
        </div>
    );
};

export default FooterInfoBlock;