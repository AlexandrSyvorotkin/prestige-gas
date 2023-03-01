import React from 'react';
import Image from "next/image";
import styles from './Logo.module.scss'

const Logo = ({scrollToTop}) => {

    const scrollToElement = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 100,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <div className={styles.logo_container}>
                <Image src='/logo/main_logo_new.png' layout='fill' onClick={() => scrollToElement(scrollToTop)} style={{cursor: 'pointer'}}/>
            </div>
            <div className={styles.logo_mini}>
                <Image src='/logo/logo_mini.png' layout='fill' onClick={() => scrollToElement(scrollToTop)} style={{cursor: 'pointer'}}/>
            </div>
        </>


    );
};

export default Logo;