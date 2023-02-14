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