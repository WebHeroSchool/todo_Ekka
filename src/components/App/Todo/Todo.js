import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import { createMuiTheme } from '@material-ui/core/styles';
import styles from './Todo.module.css';
import { CardContent } from '@material-ui/core';

const Todo = () =>  {
    const [todoItems, setTodoItems] = useState([
        {
          id: 0, 
          task: 'Сделать дело',
          isDone: false
        },
        {
          id: 1, 
          task: 'Гулять смело',
          isDone: false
        },
        {
          id: 2, 
          task: 'Сварить кашу',
          isDone: false
        },
        {
          id: 3, 
          task: 'Съесть кашу',
          isDone: false
        }
      ]
    );

    const [error, setError] = useState(false);

    useEffect(() => {
      console.log('Список дел создан');
    }, []); 

    useEffect(() => {
      console.log('Список дел обновлен');
    }, [todoItems]);

    const currentTasks =  function() {
          let counter = 0;
          todoItems.forEach(item => {
            if (!item.isDone) counter++;
          })
          return counter;
        };

    const allTasks = todoItems.length;
    
    const onClickDone = id => setTodoItems(todoItems.map(item => {
            const newItem = {...item};
    
            if (item.id === id) {
              newItem.isDone = !item.isDone
            }
            return newItem})
        );
    
    const onClickDelete = id => setTodoItems(todoItems.filter(item => item.id !== id));
    
    const onClickAdd = value => {
        if (value) {
          setTodoItems([
              ...todoItems,
              {
                id: allTasks + 1,
                task: value,
                isDone: false
              }
            ]
          );
          setError(false);
        } else setError(true);
      };
    
      const theme = createMuiTheme({
          palette: {
            primary: {
              main: '#6c5ce7'
            }
          }
        });
        
        return (<CardContent className={styles.wrap}>
          <h1 className={styles.title}>Мой список дел:</h1>    
          <InputItem 
            theme={theme}
            onClickAdd={onClickAdd}
            error={error}
          />
          <ItemList 
            todoItems={todoItems} 
            theme={theme} 
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
          />
          <Footer 
            currentTasks = {currentTasks()} 
            allTasks = {allTasks}
          />
        </CardContent>);
      }


export default Todo;