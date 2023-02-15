import React from 'react';
import styles from './Header.module.scss'
import Logo from "@/components/Logo/Logo";
import Navbar from "@/components/Navbar/Navbar";
import PhoneNumber from "@/components/PhoneNumber/PhoneNumber";

const Header = ({scrollAbout, scrollToPrices, scrollToContacts, scrollToReviews, scrollToStages, scrollToWhy}) => {
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <Logo/>
                <Navbar
                    scrollAbout={scrollAbout}
                    scrollToWhy={scrollToWhy}
                    scrollToPrices={scrollToPrices}
                    scrollToStages={scrollToStages}
                    scrollToReviews={scrollToReviews}
                    scrollToContacts={scrollToContacts}
                />
                <PhoneNumber/>
            </div>
        </header>
    );
};

export default Header;