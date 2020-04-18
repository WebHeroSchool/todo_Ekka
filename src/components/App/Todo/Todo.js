import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import { createMuiTheme } from '@material-ui/core/styles';
import styles from './Todo.module.css';

class Todo extends React.Component {
    state = {
        todoItems: [
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
        ],
        currentTasks: function() {
          let counter = 0;
          this.todoItems.forEach(item => {
            if (!item.isDone) counter++;
          })
          return counter;
        },
        allTasks: function() {
          return this.todoItems.length;
        },
        error: false
      }
    
      onClickDone = (id) => this.setState(state => ({todoItems: state.todoItems.map(item => {
            const newItem = {...item};
    
            if (item.id === id) {
              newItem.isDone = !item.isDone
            }
            return newItem})
        }));
    
      onClickDelete = (id) => this.setState(state => ({todoItems: state.todoItems.filter(item => item.id !== id)}));
    
      onClickAdd = value => {
        if (value) {
          this.setState(state => ({
            todoItems: [
              ...state.todoItems,
              {
                id: state.allTasks(),
                task: value,
                isDone: false
              }
            ],
            error: false
          }));
        } else this.setState({error: true});
      }
    
      render() {    
        const theme = createMuiTheme({
          palette: {
            primary: {
              main: '#6c5ce7'
            }
          }
        });
        
        return (<main className={styles.wrap}>
          <h1 className={styles.title}>Мой список дел:</h1>    
          <InputItem 
            theme={theme}
            onClickAdd={this.onClickAdd}
            error={this.state.error}
          />
          <ItemList 
            todoItems={this.state.todoItems} 
            theme={theme} 
            onClickDone={this.onClickDone}
            onClickDelete={this.onClickDelete}
          />
          <Footer 
            currentTasks = {this.state.currentTasks()} 
            allTasks = {this.state.allTasks()}
          />
        </main>);
      }
}

export default Todo;