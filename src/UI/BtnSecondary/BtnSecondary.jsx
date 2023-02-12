import React from 'react';
import styles from './BtnSecondary.module.scss'

const BtnSecondary = ({children, onClick}) => {
    return (
        <button className={styles.btnSecondary} onClick={onClick}>
            {children}
        </button>
    );
};

export default BtnSecondary;