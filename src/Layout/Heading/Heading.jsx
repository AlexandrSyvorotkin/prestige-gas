import React from 'react';
import styles from './Heading.module.scss'

const Heading = ({tag, text}) => {

    const Tag = tag || 'h2'

    return (
        <Tag>{text}</Tag>
    );
};

export default Heading;