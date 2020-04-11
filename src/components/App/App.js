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
    count: function() {
      let counter = 0;
      this.todoItems.forEach(item => {
        if (!item.isDone) counter++;
      })
      return counter;
    }
  }

  onClickDone = (id) => {
    const newItemList = this.state.todoItems.map(item => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
      return item;
    });

    this.setState({todoItems: newItemList});
  };

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
      <InputItem theme={theme}/>
      <ItemList 
        todoItems={this.state.todoItems} 
        theme={theme} 
        onClickDone={this.onClickDone}
      />
      <Footer count = {this.state.count()} />
    </main>);
  }
}

export default App;