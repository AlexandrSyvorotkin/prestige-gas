import React, {useState} from 'react';
import styles from './PhoneNumber.module.scss'
import Modal from "@/UI/Modal/Modal";
import Hamburger from "@/components/Hamburger/Hamburger";

//TODO: Поправить верстку дома

const PhoneNumber = ({setMenuActive}) => {

    const [openModal, setOpenModal] = useState(false )

    return (
        <div className={styles.phone_number}>
            <div className={styles.number_descr}>
                <a className={styles.number} href='tel:+79804336814'>7 (980) 433-68-14</a>
                <span className={styles.request} onClick={() => setOpenModal(true)}>Заказать звонок</span>
                {openModal ? <Modal setOpenModal={setOpenModal}/> : null}
                <Hamburger setMenuActive={setMenuActive}/>
            </div>
            {/*<div className={styles.number_descr}>*/}
            {/*    <a className={styles.number} href='tel:+79772955933'>7 (977) 295-59-33</a>*/}
            {/*    <span className={styles.alarm_request}>Аварийный выезд мастера</span>*/}
            {/*</div>*/}
        </div>

    );
};

export default PhoneNumber;