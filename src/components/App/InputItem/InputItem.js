import React from 'react';
import styles from './InputItem.module.css'

const InputItem = () => (
    <div>
        <input type="text" placeholder="InputItem " className={styles.input}></input>
    </div>    
);

export default InputItem;