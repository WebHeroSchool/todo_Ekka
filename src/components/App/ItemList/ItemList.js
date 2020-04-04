import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItems}) => (<ul>
    <Item todoItems={todoItems.first}/>
    <Item todoItems={todoItems.second}/>
    <Item todoItems={todoItems.third}/>
    <Item todoItems={todoItems.fourth}/>
  </ul>)

  export default ItemList;
  