import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames'

const Item = ({task, isDone}) => (
    <li className={
        classnames({
            [styles.item]: true,
            [styles.done]: isDone,
        })
    }>
        {task}
    </li>    
);

export default Item;