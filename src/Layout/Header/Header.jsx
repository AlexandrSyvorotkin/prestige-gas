import React from 'react';
import styles from './Header.module.scss'
import Logo from "@/components/Logo/Logo";
import Navbar from "@/components/Navbar/Navbar";
import PhoneNumber from "@/components/PhoneNumber/PhoneNumber";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <Logo/>
                <Navbar/>
                <PhoneNumber/>
            </div>
        </header>
    );
};

export default Header;