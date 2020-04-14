import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({currentTasks, allTasks}) => (
    <footer className={styles.footer}>
       <p>Осталось дел: {currentTasks}</p>
       <p>Всего дел: {allTasks}</p>
    </footer>    
);

Footer.propTypes = {
    currentTasks: PropTypes.number.isRequired,
    allTasks: PropTypes.number.isRequired
}

export default Footer;