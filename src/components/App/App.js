import React from 'react';
import ItemList from './ItemList/ItemList';
import InputItem from './InputItem/InputItem';
import Footer from './Footer/Footer';
import './App.css';
import '../../fonts.css';

const todoItems = [
  {id: 0, task: 'Сделать 19 урок'},
  {id: 1, task: 'Оплатить интернет'},
  {id: 2, task: 'Сварить кашу'},
  {id: 3, task: 'Почитать книгу'}
];
const count = todoItems.length;

const App = () => (
  <main className='wrap'>
    <h1 className='wrap__title'>Важные дела:</h1>    
    <InputItem />
    <ItemList todoItems={todoItems}/>
    <Footer count = {count} />
  </main>)

export default App;