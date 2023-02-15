import React from 'react';
import styles from './Navbar.module.scss'

const menu = [
    {id: 1, name: 'О компании', path: ''},
    {id: 2, name: 'Почему выбирают нас', path: ''},
    {id: 3, name: 'Цены', path: ''},
    {id: 4, name: 'Этапы', path: ''},
    {id: 5, name: 'Отзывы', path: ''},
    {id: 6, name: 'Контакты', path: ''},
]

const Navbar = ({scrollAbout, scrollToPrices, scrollToWhy, scrollToContacts, scrollToReviews, scrollToStages}) => {

    const scrollToElement = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 100,
            behavior: 'smooth'
        })
    }

    return (
        <div className={styles.navbar}>
            <ul>
                <li onClick={() => scrollToElement(scrollAbout)}>О компании</li>
                <li onClick={() => scrollToElement(scrollToWhy)}>Почему выбирают нас</li>
                <li onClick={() => scrollToElement(scrollToPrices)}>Цены</li>
                <li onClick={() => scrollToElement(scrollToStages)}>Этапы</li>
                <li onClick={() => scrollToElement(scrollToReviews)}>Отзывы</li>
                <li onClick={() => scrollToElement(scrollToContacts)}>Контакты</li>
            </ul>
        </div>
    );
};

export default Navbar;