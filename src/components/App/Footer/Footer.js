import React from 'react';
import styles from './Footer.module.css'

const Footer = ({currentTasks, allTasks}) => (
    <footer className={styles.footer}>
       <p>Осталось дел: {currentTasks}</p>
       <p>Всего дел: {allTasks}</p>
    </footer>    
);

export default Footer;