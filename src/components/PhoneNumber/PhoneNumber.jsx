import React from 'react';
import styles from './PhoneNumber.module.scss'

const PhoneNumber = () => {
    return (
        <div className={styles.phone_number}>
            <span className={styles.number}>8 (495) 147-71-91</span>
            <span className={styles.request}>Заказать звонок</span>
        </div>
    );
};

export default PhoneNumber;