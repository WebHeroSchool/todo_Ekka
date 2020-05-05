import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import { createMuiTheme } from '@material-ui/core/styles';
import styles from './Todo.module.css';
import { CardContent } from '@material-ui/core';
import { DragDropContext } from "react-beautiful-dnd";
import noteIcon from '../img/note.svg';

const Todo = () =>  {
    const [todoItems, setTodoItems] = useState([
        {
          id: 0, 
          task: 'Сделать дело',
          isDone: false,
          isHidden: false
        },
        {
          id: 1, 
          task: 'Гулять смело',
          isDone: false,
          isHidden: false
        }
      ]
    );

    useEffect(() => {
      const items = localStorage.getItem('todoItems');
      setTodoItems(JSON.parse(items))
    }, [])

    useEffect(() => {
      localStorage.setItem('todoItems', JSON.stringify(todoItems))
    }, [todoItems])

    const [error, setError] = useState(false);

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

    const onClickAllTasks = () => setTodoItems(todoItems.map(item => {
      const newItem = {...item};

      newItem.isHidden = false;
      return newItem;
    }));

    const onClickDoneTasks = () => setTodoItems(todoItems.map(item => {
      const newItem = {...item};
  
      (!item.isDone) ?  newItem.isHidden = true : newItem.isHidden = false;

      return newItem
    }));

    const onClickUndoneTasks = () => setTodoItems(todoItems.map(item => {
      const newItem = {...item};
  
      (item.isDone) ?  newItem.isHidden = true : newItem.isHidden = false;

      return newItem
  }));
    
    const onClickAdd = value => {
      todoItems.forEach(todo => {if (todo.task === value) value = false});
        
        if (value) {
          setTodoItems([
              ...todoItems,
              {
                id: Date.now(),
                task: value,
                isDone: false,
                isHidden: false
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
    
    const onDragEnd = result => {
      const { source, destination } = result;
      if (!destination) return;

      const newTodoItems = [...todoItems];

      const [removed] = newTodoItems.splice(source.index, 1);
      newTodoItems.splice(destination.index, 0, removed)
      setTodoItems([
        ...newTodoItems
      ])
    }
      
    return (<CardContent className={styles.wrap}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.header}>
          <h1 className={styles.title}>Мой список дел</h1>
          <div className={styles.button_container}>

            <button 
              className={styles.button}
              onClick = {() => onClickAllTasks()}
            >Все ({allTasks})</button>

            <button 
              className={styles.button}
              onClick={() => onClickDoneTasks()}
            >Выполненные ({allTasks - currentTasks()})</button>

            <button 
              className={styles.button}
              onClick={() => onClickUndoneTasks()}
            >Невыполненные ({currentTasks()})</button>
          </div>
          
          <InputItem 
            theme={theme}
            onClickAdd={onClickAdd}
            error={error}
          />
        </div>

          {(todoItems.length === 0) ? <div className={styles.notasks_wrap}>
            <img src={noteIcon} className={styles.notasks_img}/>
            <h2 className={styles.subtitle}> Дел не обнаружено</h2>
          </div> :
          <ItemList 
            todoItems={todoItems} 
            theme={theme} 
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
          />}
    
      </DragDropContext>    
    </CardContent>);
  }


export default Todo;