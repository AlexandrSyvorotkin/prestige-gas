import React, {useRef} from 'react';
import Header from "@/Layout/Header/Header";
import Footer from "@/Layout/Footer/Footer";
import styles from './Layout.module.scss'

const Layout = ({children}) => {

    const scrollAbout = useRef(null)
    const scrollToWhy = useRef(null)
    const scrollToPrices = useRef(null)
    const scrollToStages = useRef(null)
    const scrollToReviews = useRef(null)
    const scrollToContacts = useRef(null)

    return (
        <>
            {/*<Header/>*/}
            {children}
            <Footer/>
        </>
    );
};

export default Layout;