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
        isDone: true
      },
      {
        id: 1, 
        task: 'Оплатить интернет',
        isDone: false
      },
      {
        id: 2, 
        task: 'Сварить кашу',
        isDone: true
      },
      {
        id: 3, 
        task: 'Почитать книгу',
        isDone: false
      }
    ]
  }
  render() {
    const count = this.state.todoItems.length;
    
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
      <ItemList todoItems={this.state.todoItems} theme={theme}/>
      <Footer count = {count} />
    </main>);
  }
}

export default App;