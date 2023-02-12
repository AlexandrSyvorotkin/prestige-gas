import React from 'react';
import styles from './BtnMain.module.scss'

const BtnMain = ({children, onClick}) => {
    return (
        <button className={styles.btn_main} onClick={onClick}>
            {children}
        </button>
    );
};

export default BtnMain;