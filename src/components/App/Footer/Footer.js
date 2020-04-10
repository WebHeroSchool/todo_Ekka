import React from 'react';
import styles from './Footer.module.css'

const Footer = ({count}) => (
    <footer className={styles.footer}>
       Осталось дел: {count}
    </footer>    
);

export default Footer;