//React, Next api
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
// //libs and styles
import styles from './SideBarMenu.module.scss'
import classNames from "classnames";

const SideBarMenu = ({setMenuActive, menuActive}) => {

    const menu = classNames({
        [styles.menu]: true,
        [styles.active]: menuActive,
    })
    const {pathname} = useRouter()

    return (
        <div className={menu} onClick={() => setMenuActive(false)}>
            <div className={styles.blur}/>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <div onClick={() => setMenuActive(false)}>
                    <Image src='/side_menu/side_menu.png' height={20} width={20} alt=""/>
                </div>
                <ul>
                    {/*{navlinks.map(link => (*/}
                    {/*    <li key={link.id} className={styles.links} onClick={() => setMenuActive(false)}>*/}
                    {/*        <Link href={link.path}>*/}
                    {/*            <a className={pathname === link.path ? styles.active_link : null}>*/}
                    {/*                {link.title}*/}
                    {/*            </a>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*))}*/}
                </ul>
                <div className={styles.information}>
                    {/*<Link href="tel:+7(3513)264488">*/}
                    {/*    <a>*/}
                    {/*        <Image*/}
                    {/*            src='/side_menu/tel.png'*/}
                    {/*            height={51}*/}
                    {/*            width={51}*/}
                    {/*            alt=""*/}
                    {/*        />*/}
                    {/*    </a>*/}
                    {/*</Link>*/}
                    <div className={styles.number}>
                        <a href="tel:+7(3513)264488">+7 (3513) 26 44 88</a>
                        <a href="tel:+7(951)2369777">+7 (951) 23 69 777</a>
                    </div>
                    <p className={styles.email}>ibkprodagi@mail.ru</p>
                </div>
                <div className={styles.social_links}>
                    <ul>
                        {/*{social_links.map(link => (*/}
                        {/*    <li key={link.id}>*/}
                        {/*        <Link href={link.path}>*/}
                        {/*            <a target='_blank' rel='noreferrer noopener nofollow'>*/}
                        {/*                <Image src={link.img} width={20} height={20} alt=""/>*/}
                        {/*            </a>*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*))}*/}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBarMenu;