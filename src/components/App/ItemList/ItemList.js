import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItems}) => (<ul>
    {todoItems.map(todoItem => 
      <Item key={todoItem.id} task={todoItem.task} isDone={todoItem.isDone} />)}
  </ul>)

  export default ItemList;
  