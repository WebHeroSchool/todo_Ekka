import React from 'react';
import img from './img/preloader.svg';
import styles from './Preloader.module.css';

const Preloader = () => (<div className={styles.wrap}>
    <img src={img}/>
</div>);

export default Preloader;