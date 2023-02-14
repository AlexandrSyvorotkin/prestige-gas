import React, {useState} from 'react';
import styles from './Prices.module.scss'
import Container from "@/Layout/Container/Container";
import PriceItem from "@/components/PriceItem/PriceItem";

const navigation = [
    {id: 1, title: 'Отопление', path: '/heating'},
    {id: 2, title: 'Водоснабжение', path: '/watersuply'},
    {id: 3, title: 'Канализация', path: ''},
    {id: 4, title: 'Вентиляция и дымоудаление', path: ''},
    {id: 5, title: 'Электрика', path: ''},
]


const Prices = () => {

    const [toggleTab, setToggleTab] = useState(1)

    return (
        <section className={styles.prices}>
            <Container>
                <div className={styles.header}>
                    Цены на наши услуги
                </div>
                <div className={styles.navigation}>
                    <ul>
                        <li onClick={() => setToggleTab(1)}
                            className={toggleTab === 1 ? `${styles.active}` : `${styles.list_item}`}>Отопление
                        </li>
                        <li onClick={() => setToggleTab(2)}
                            className={toggleTab === 2 ? `${styles.active}` : `${styles.list_item}`}>Водоснабжение
                        </li>
                        <li onClick={() => setToggleTab(3)}
                            className={toggleTab === 3 ? `${styles.active}` : `${styles.list_item}`}>Стиральные машины
                        </li>
                        <li onClick={() => setToggleTab(4)}
                            className={toggleTab === 4 ? `${styles.active}` : `${styles.list_item}`}>Духовые шкафы
                        </li>
                        <li onClick={() => setToggleTab(5)}
                            className={toggleTab === 5 ? `${styles.active}` : `${styles.list_item}`}>Электрические
                            газовые плиты
                        </li>
                    </ul>
                    <div className={styles.nav_list}/>
                </div>
                <div className={styles.tabs}>
                    <div className={toggleTab === 1 ? `${styles.tab_content_active}` : `${styles.tab_content}`}>
                        <PriceItem
                            title='Монтаж настенного котла'
                            price='18000'
                            img='/prices/nasten.jpg'
                        />
                        <PriceItem
                            title='Монтаж напольного котла'
                            price='28000'
                            img='/prices/napol.jpg'
                        />
                        <PriceItem
                            title='Монтаж настенного котла'
                            price='35000'
                            img='/prices/gidr.jpg'
                        />
                        <PriceItem
                            title='Монтаж бойлера'
                            price='15000'
                            img='/prices/boiler.jpg'
                        />
                        <PriceItem
                            title='Монтаж гидравлической части котельной'
                            price='35000'
                            img='/prices/kollektor.jpg'
                        />
                        <PriceItem
                            title='Монтаж внутрипольного конвектора'
                            price='8000'
                            img='/prices/konver.jpg'
                        />
                        <PriceItem
                            title='Монтаж радиатора'
                            price='8000'
                            img='/prices/radiator.jpg'
                        />
                        <PriceItem
                            title='Монтаж теплого пола'
                            price='1000'
                            img='/prices/tepli_pol.jpg'
                        />
                    </div>
                    <div className={toggleTab === 2 ? `${styles.tab_content_active}` : `${styles.tab_content}`}>
                        <PriceItem
                            title='Монтаж бойлера'
                            price='9999'
                            img='/prices/boiler.jpg'
                        />
                        <PriceItem
                            title='Монтаж системы отопления'
                            price='15000'
                            img='/prices/nasos.jpg'
                        />
                        <PriceItem
                            title='Монтаж системы отопления'
                            price='15000'
                            img='/prices/vodosn.jpg'
                        />
                    </div>
                    <div className={toggleTab === 3 ? `${styles.tab_content_active}` : `${styles.tab_content}`}>
                        <p>Третий таб</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Prices;