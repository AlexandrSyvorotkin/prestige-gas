import React from 'react';
import Header from "@/Layout/Header/Header";
import Footer from "@/Layout/Footer/Footer";
import styles from './Layout.module.scss'

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className={styles.header_wrapper}/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;