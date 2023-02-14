import React from 'react';
import styles from './PricesNavigation.module.scss'

const navigation = [
    {id: 1, title: 'Отопление', path: '/heating'},
    {id: 2, title: 'Водоснабжение', path: '/watersuply'},
    {id: 3, title: 'Канализация', path: ''},
    {id: 4, title: 'Вентиляция и дымоудаление', path: ''},
    {id: 5, title: 'Электрика', path: ''},
]

const PricesNavigation = ({}) => {
    return (
        <div className={styles.navigation}>
            <ul>
                {navigation.map(it =>
                    <li key={it.id}>
                        {it.title}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default PricesNavigation;