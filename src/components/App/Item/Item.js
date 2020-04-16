import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider } from '@material-ui/core/styles';
import Done from '@material-ui/icons/DoneOutline';
import Undone from '@material-ui/icons/ErrorOutline';
import PropTypes from 'prop-types';

class Item extends React.Component {  
    
    componentDidMount() {
        console.log('Добавился элемент списка');
    }
    componentDidUpdate() {
        console.log('Элемент списка обновлен');
    }
    componentWillUnmount() {
        console.log('Элемент списка удален');
    }
    
    render() {        
        const {task, isDone, theme,  onClickDone, id, onClickDelete} = this.props;

        return(
            <li className={
                classnames({
                    [styles.item]: true,
                    [styles.done]: isDone,
                })
            }>
                <ThemeProvider theme={theme}>
                    <FormControlLabel
                    theme={theme}
                    control={
                    <Checkbox 
                        icon={<Undone fontSize="large" />} 
                        checkedIcon={<Done />}
                        name="checkedB"
                        color="primary"
                        onClick = {() => onClickDone(id)}
                    />
                    }
                    label={task}   
                />
                    <span className={styles.icon_delete}>   
                        <IconButton 
                            aria-label="delete" 
                            onClick = {() => onClickDelete(id)}
                        >
                            <DeleteIcon fontSize="small"/>
                        </IconButton>
                    </span>
                </ThemeProvider>
            </li>      
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