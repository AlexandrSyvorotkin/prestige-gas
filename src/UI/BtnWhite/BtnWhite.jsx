import React from 'react';
import styles from './BtnWhite.module.scss'

const BtnWhite = ({children, onClick}) => {
    return (
        <button className={styles.btn} onClick={onClick}>
            {children}
        </button>
    );
};

export default BtnWhite;