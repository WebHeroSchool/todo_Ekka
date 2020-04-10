import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItems, theme, onClickDone}) => (<ul>
    {todoItems.map(todoItem => 
      <Item 
        key={todoItem.id} 
        task={todoItem.task} 
        isDone={todoItem.isDone}
        theme={theme} 
        onClickDone={onClickDone} />)}
  </ul>)

  export default ItemList;
  