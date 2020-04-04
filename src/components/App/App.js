import React from 'react';
import ItemList from './ItemList/ItemList';
import InputItem from './InputItem/InputItem';
import Footer from './Footer/Footer'

const todoItems = [
  'Сделать 19 урок',
  'Оплатить интернет',
  'Сварить кашу',
  'Почитать книгу'
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