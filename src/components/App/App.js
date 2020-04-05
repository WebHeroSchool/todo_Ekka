import React from 'react';
import ItemList from './ItemList/ItemList';
import InputItem from './InputItem/InputItem';
import Footer from './Footer/Footer'

const todoItems = [
  {id: 0, task: 'Сделать 19 урок'},
  {id: 1, task: 'Оплатить интернет'},
  {id: 2, task: 'Сварить кашу'},
  {id: 3, task: 'Почитать книгу'}
];
const count = todoItems.length;

const App = () => (
  <div>
    <h1>Важные дела:</h1>    
    <InputItem />
    <ItemList todoItems={todoItems}/>
    <Footer count = {count} />
  </div>)

export default App;