import React from 'react';
import ItemList from './ItemList/ItemList';
import InputItem from './InputItem/InputItem';
import Footer from './Footer/Footer';
import styles from './App.module.css';
import '../../fonts.css';
import { createMuiTheme } from '@material-ui/core/styles';


class App extends React.Component{
  state = {
    todoItems: [
      {
        id: 0, 
        task: 'Сделать 19 урок',
        isDone: false
      },
      {
        id: 1, 
        task: 'Оплатить интернет',
        isDone: false
      },
      {
        id: 2, 
        task: 'Сварить кашу',
        isDone: false
      },
      {
        id: 3, 
        task: 'Почитать книгу',
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
      <h1 className={styles.title}>Важные дела:</h1>    
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

export default App;