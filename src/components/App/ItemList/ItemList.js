import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItems}) => (<ul>
    {todoItems.map(todoItem => <Item key={todoItem.id} task={todoItem.task}/>)}
  </ul>)

  export default ItemList;
  