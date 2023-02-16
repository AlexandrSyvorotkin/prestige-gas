import React, {useContext, useState} from 'react';
import styles from './FooterInfoBlock.module.scss'
import Image from "next/image";
import BtnMain from "@/UI/BtnMain/BtnMain";
import Modal from "@/UI/Modal/Modal";

const FooterInfoBlock = ({openModal, setOpenModal}) => {

    return (
        <div className={styles.footer_info_block}>
            <div className={styles.info_block_section}>
                <div className={styles.info_item}>
                    <Image src='/footer_logos/ic-locat.png' width='13' height='15' alt=''/>
                    <span>г.Реутов юбилейный проспект д.67</span>
                </div>
                <div className={styles.info_item}>
                    <Image src='/footer_logos/icon8-min.png' width='30' height='30' alt=''/>
                    <span>+7 (977) 295-59-33</span>
                </div>
            </div>
            <div className={styles.info_block_section}>
                <div className={styles.info_item}>
                    <Image src='/footer_logos/ic-mail.png' width='20' height='13' alt=''/>
                    <span>prestigegas2023@gmail.com</span>
                </div>
                <BtnMain onClick={() => setOpenModal(true)}>Заказать звонок</BtnMain>
            </div>
            {openModal ? <Modal setOpenModal={setOpenModal}/> : null}
        </div>
    );
};

export default FooterInfoBlock;