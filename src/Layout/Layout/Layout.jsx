import React from 'react';
import Header from "@/Layout/Header/Header";
import Footer from "@/Layout/Footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <Footer/>
        </>
    );
};

export default Layout;