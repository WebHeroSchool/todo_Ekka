import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItems}) => (<ul>
    {todoItems.map(task => <Item task={task}/>)}
  </ul>)

  export default ItemList;
  