import React from 'react';
import ItemList from './ItemList/ItemList';
import InputItem from './InputItem/InputItem';
import Footer from './Footer/Footer'

const todoItems = {
  first: 'Сделать 19 урок',
  second: 'Оплатить интернет',
  third: 'Сварить кашу',
  fourth: 'Почитать книгу'
};
const count = Object.keys(todoItems).length;

const App = () => (
  <div>
    <h1>Важные дела:</h1>    
    <InputItem />
    <ItemList todoItems={todoItems}/>
    <Footer count = {count} />
  </div>)

export default App;