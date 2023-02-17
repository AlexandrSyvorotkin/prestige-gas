//React, Next api
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
// //libs and styles
import styles from './SideBarMenu.module.scss'
import classNames from "classnames";

const SideBarMenu = ({setMenuActive, menuActive, scrollAbout, scrollToContacts, scrollToPrices, scrollToReviews, scrollToStages, scrollToWhy}) => {

    const menu = classNames({
        [styles.menu]: true,
        [styles.active]: menuActive,
    })
    const {pathname} = useRouter()

    const scrollToElement = (elementRef) => {
        setMenuActive(false)
        window.scrollTo({
            top: elementRef.current.offsetTop - 100,
            behavior: 'smooth'
        })
    }

    return (
        <div className={menu} onClick={() => setMenuActive(false)}>
            <div className={styles.blur}/>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <div onClick={() => setMenuActive(false)} className={styles.close}>
                    <Image src='/closeModal.png' height={20} width={20} alt=""/>
                </div>
                <ul className={styles.list_items}>
                    <li onClick={() => scrollToElement(scrollAbout)}>О компании</li>
                    <li onClick={() => scrollToElement(scrollToWhy)}>Почему выбирают нас</li>
                    <li onClick={() => scrollToElement(scrollToPrices)}>Цены</li>
                    <li onClick={() => scrollToElement(scrollToStages)}>Этапы</li>
                    {/*<li onClick={() => scrollToElement(scrollToReviews)}>Отзывы</li>*/}
                    <li onClick={() => scrollToElement(scrollToContacts)}>Контакты</li>
                </ul>
            </div>
        </div>
    );
};

export default SideBarMenu;