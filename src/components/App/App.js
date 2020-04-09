import React from 'react';
import ItemList from './ItemList/ItemList';
import InputItem from './InputItem/InputItem';
import Footer from './Footer/Footer';
import styles from './App.module.css';
import '../../fonts.css';
import { createMuiTheme } from '@material-ui/core/styles';

const App = () => {
  const todoItems = [
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
  ];
  const count = todoItems.length;
  
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
    <ItemList todoItems={todoItems} theme={theme}/>
    <Footer count = {count} />
  </main>);
}

export default App;