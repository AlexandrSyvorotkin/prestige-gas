import React from 'react';
import styles from './LinksBlock.module.scss'

const LinksBlock = ({title, links}) => {
    return (
        <div className={styles.links_block}>
                <span className={styles.title}>{title}</span>
                <ul className={styles.list}>
                    {links.map(link =>
                        <li className={styles.single_link} key={link.id}>{link.name}</li>
                    )}
                </ul>
        </div>
    );
};

export default LinksBlock;