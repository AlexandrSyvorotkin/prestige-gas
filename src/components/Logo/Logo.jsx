import React from 'react';
import Image from "next/image";

const Logo = ({scrollToTop}) => {

    const scrollToElement = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 100,
            behavior: 'smooth'
        })
    }

    return (
        <Image src='/logo/main_logo_new.png' width='200' height='70' alt='logo' onClick={() => scrollToElement(scrollToTop)} style={{cursor: 'pointer'}}/>
    );
};

export default Logo;