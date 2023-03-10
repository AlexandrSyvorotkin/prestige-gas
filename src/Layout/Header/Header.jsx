import React, {useState} from 'react';
import styles from './Header.module.scss'
import Logo from "@/components/Logo/Logo";
import Navbar from "@/components/Navbar/Navbar";
import PhoneNumber from "@/components/PhoneNumber/PhoneNumber";
import SideBarMenu from "@/components/SideBarMenu/SideBarMenu";
import Hamburger from "@/components/Hamburger/Hamburger";
import Container from "@/Layout/Container/Container";
import {BsTelegram} from "react-icons/bs";
import {AiOutlineWhatsApp} from "react-icons/ai";

const Header = ({scrollAbout, scrollToPrices, scrollToContacts, scrollToReviews, scrollToStages, scrollToWhy, scrollToTop}) => {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <header className={styles.header} ref={scrollToTop}>
            <Container>
                <div className={styles.header_content}>
                    <Logo scrollToTop={scrollToTop}/>
                    <Navbar
                        scrollAbout={scrollAbout}
                        scrollToWhy={scrollToWhy}
                        scrollToPrices={scrollToPrices}
                        scrollToStages={scrollToStages}
                        scrollToReviews={scrollToReviews}
                        scrollToContacts={scrollToContacts}
                    />

                    <PhoneNumber setMenuActive={setMenuActive}/>
                    {/*<div onClick={()=>setMenuActive(true)}>*/}
                    {/*    открыть меню*/}
                    {/*</div>*/}
                    <SideBarMenu
                        menuActive={menuActive}
                        setMenuActive={setMenuActive}
                        scrollAbout={scrollAbout}
                        scrollToWhy={scrollToWhy}
                        scrollToPrices={scrollToPrices}
                        scrollToStages={scrollToStages}
                        scrollToReviews={scrollToReviews}
                        scrollToContacts={scrollToContacts}
                    />

                </div>
            </Container>
        </header>
    );
};

export default Header;