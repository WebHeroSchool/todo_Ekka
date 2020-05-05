import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames'
import DeleteIcon from '../img/delete.svg';
import { ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

class Item extends React.Component {  
    
    render() {        
        const {task, isDone, isHidden, id, index, theme, onClickDone, onClickDelete, provided, innerRef } = this.props;

        return(
            <div className={
                classnames({
                    [styles.item]: true,
                    [styles.done]: isDone,
                    [styles.hidden]: isHidden
                })}
                ref={innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
            
                <ThemeProvider theme={theme}>
                    <div onClick = {() => onClickDone(id)}  className={styles.task}>
                        <span>{task}</span>
                    </div>

                    <div className={styles.icon_delete}>   
                        <img 
                            src={DeleteIcon} 
                            onClick = {() => onClickDelete(id)}
                        />
                    </div>
                </ThemeProvider>

            </div>
        )
    }
} 

Item.defaultProps = {
    task: 'Что-то надо сделать',
    isDone: false
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
}

export default Item;