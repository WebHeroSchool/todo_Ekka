import React, { useEffect } from 'react'
import Item from '../Item/Item'
import PropTypes from 'prop-types'
import { Droppable, Draggable } from "react-beautiful-dnd"

class ItemList extends React.Component { 
  render() {
    const {todoItems, theme, onClickDone, onClickDelete} = this.props;
  
    return(
      <Droppable droppableId={'list'}>  
        {(provided) => (<div ref={provided.innerRef} {...provided.droppableProps}>
          {todoItems.map((todoItem, index) => 
            <Draggable draggableId={'item' + todoItem.id} index={index} key={todoItem.id} >
              {(provided) => (
                <Item 
                  task={todoItem.task} 
                  isDone={todoItem.isDone}
                  isHidden={todoItem.isHidden}
                  id={todoItem.id}
                  theme={theme} 
                  onClickDone={onClickDone}
                  onClickDelete={onClickDelete}
                  provided={provided}
                  innerRef={provided.innerRef}
                />)}
              </Draggable>   
          )}
          {provided.placeholder}
        </div>)}            
        </Droppable>
    )   
  }
}

ItemList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
}
  export default ItemList;
  