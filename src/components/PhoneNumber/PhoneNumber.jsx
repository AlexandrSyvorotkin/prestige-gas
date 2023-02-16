import React, {useState} from 'react';
import styles from './PhoneNumber.module.scss'
import Modal from "@/UI/Modal/Modal";
import Hamburger from "@/components/Hamburger/Hamburger";

const PhoneNumber = ({setMenuActive}) => {

    const [openModal, setOpenModal] = useState(false )

    return (
        <div className={styles.phone_number}>
            <span className={styles.number}>8 (495) 147-71-91</span>
            <span className={styles.request} onClick={() => setOpenModal(true)}>Заказать звонок</span>
            {openModal ? <Modal setOpenModal={setOpenModal}/> : null}
            <Hamburger setMenuActive={setMenuActive}/>
        </div>
    );
};

export default PhoneNumber;