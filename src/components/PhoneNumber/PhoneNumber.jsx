import React, {useState} from 'react';
import styles from './PhoneNumber.module.scss'
import Modal from "@/UI/Modal/Modal";
import Hamburger from "@/components/Hamburger/Hamburger";

const PhoneNumber = ({setMenuActive}) => {

    const [openModal, setOpenModal] = useState(false )

    return (
        <div className={styles.phone_number}>
            <a className={styles.number} href='tel:+79772955933'>+7 (977) 295-59-33</a>
            <span className={styles.request} onClick={() => setOpenModal(true)}>Заказать звонок</span>
            {openModal ? <Modal setOpenModal={setOpenModal}/> : null}
            <Hamburger setMenuActive={setMenuActive}/>
        </div>
    );
};

export default PhoneNumber;