import React from 'react';
import styles from './Navbar.module.scss'

const menu = [
    {id: 1, name: 'Главная', path: ''},
    {id: 2, name: 'Услуги', path: ''},
    {id: 3, name: 'О компании', path: ''},
    {id: 5, name: 'Портфолио', path: ''},
    {id: 6, name: 'Контакты', path: ''},
]

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                {menu.map(it =>
                    <li key={it.id}>{it.name}</li>
                )}
            </ul>
        </div>
    );
};

export default Navbar;