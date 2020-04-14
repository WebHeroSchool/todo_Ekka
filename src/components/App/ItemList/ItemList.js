import React from 'react';
import Item from '../Item/Item';
import PropTypes from 'prop-types'

const ItemList = ({todoItems, theme, onClickDone, onClickDelete}) => (<ul>
    {todoItems.map(todoItem => 
      <Item 
        key={todoItem.id} 
        task={todoItem.task} 
        isDone={todoItem.isDone}
        id={todoItem.id}
        theme={theme} 
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />)}
  </ul>)

ItemList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
}
  export default ItemList;
  