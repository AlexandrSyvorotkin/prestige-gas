import React, {useState} from 'react';
import styles from './Prices.module.scss'
import Container from "@/Layout/Container/Container";
import PriceItem from "@/components/PriceItem/PriceItem";
import Heading from "@/Layout/Heading/Heading";

const navigation = [
    {id: 1, title: 'Отопление', path: '/heating'},
    {id: 2, title: 'Водоснабжение', path: '/watersuply'},
    {id: 3, title: 'Канализация', path: ''},
    {id: 4, title: 'Вентиляция и дымоудаление', path: ''},
    {id: 5, title: 'Электрика', path: ''},
]

const pricesHeating = [
    {id: 1, title: 'Монтаж настенного котла', price: '18000', img: '/prices/nasten.jpg'},
    {id: 2, title: 'Монтаж напольного котла', price: '28000', img: '/prices/napol.jpg'},
    {id: 3, title: 'Монтаж гидравлической части котельной', price: '35000', img: '/prices/gidr.jpg'},
    {id: 4, title: 'Монтаж внутрипольного конвектора', price: '8000', img: '/prices/konver.jpg'},
    {id: 5, title: 'Монтаж радиатора', price: '8000', img: '/prices/radiator.jpg'},
    {id: 6, title: 'Монтаж теплого пола', price: '1000', img: '/prices/tepli_pol.jpg'},
    {id: 7, title: 'Монтаж системы отопления', price: '15000', img: '/prices/nasos.jpg'},
]

const waterSupplyPrices = [
    {id: 1, title: 'Монтаж бойлера косвенного нагрева', price: '9999', img: '/prices/boiler.jpg'},
    {id: 2, title: 'Монтаж колодезного насоса', price: '15000', img: '/prices/nasos.jpg'},
]

const appliancesPrices = [
    {id: 1, title: 'ремонт бойлеров', price: '3000', img: '/newprices/spray.png'},
    {id: 2, title: 'ремонт газовых колонок', price: '3000', img: '/newprices/temperatures.png'},
    {id: 3, title: 'ремонт духовых шкафов', price: '3000', img: '/newprices/microwave.png'},
    {id: 4, title: 'ремонт варочных панелей', price: '3000', img: '/newprices/plate.png'},
    {id: 5, title: 'ремонт холодильников', price: '3000', img: '/newprices/fridge.png'},
    {id: 6, title: 'ремонт стиральных машин', price: '3000', img: '/newprices/washingmachine.png'},
    {id: 7, title: 'ремонт посудомоечных машин', price: '3000', img: '/newprices/dishwasher.png'},
]

const housesPrices = [
    {id: 1, title: 'проектирование домов под ключ', price: 'от 25000 руб', img: '/newprices/houses.png'},
    {id: 2, title: 'строительство домов', price: '45000 руб за кв метр', img: '/newprices/houses2.png'},
]


const Prices = ({scroll}) => {

    const [toggleTab, setToggleTab] = useState(1)

    return (
        <section className={styles.prices} ref={scroll}>
            <Container>
                <div className={styles.header}>
                    <Heading text='Цены на наши услуги' tag='h3'/>
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
                            className={toggleTab === 3 ? `${styles.active}` : `${styles.list_item}`}>Бытовая техника
                        </li>
                        <li onClick={() => setToggleTab(4)}
                            className={toggleTab === 4 ? `${styles.active}` : `${styles.list_item}`}>Строительство и проектирование загородных домов
                        </li>
                    </ul>
                    <div className={styles.nav_list}/>
                </div>
                <div className={styles.tabs}>
                    <div className={toggleTab === 1 ? `${styles.tab_content_active}` : `${styles.tab_content}`}>
                        {pricesHeating.map(it =>
                            <PriceItem key={it.id} title={it.title} price={it.price} img={it.img}/>
                        )}
                    </div>
                    <div className={toggleTab === 2 ? `${styles.tab_content_active}` : `${styles.tab_content}`}>
                        {waterSupplyPrices.map(it =>
                            <PriceItem key={it.id} title={it.title} price={it.price} img={it.img}/>
                        )}
                    </div>
                    <div className={toggleTab === 3 ? `${styles.tab_content_active}` : `${styles.tab_content}`}>
                        {appliancesPrices.map(it =>
                            <PriceItem key={it.id} title={it.title} price={it.price} img={it.img}/>
                        )}
                    </div>
                    <div className={toggleTab === 4 ? `${styles.tab_content_active}` : `${styles.tab_content}`}>
                        {housesPrices.map(it =>
                            <PriceItem key={it.id} title={it.title} price={it.price} img={it.img}/>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Prices;