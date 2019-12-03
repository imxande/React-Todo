import React from 'react';
import { styles } from 'ansi-colors';

const Todo = props => {

    const handleClick = event => {
        alert('You clicked on the todo')
       
    }
  return (
    <div>
      <p onClick= {handleClick}>{props.todos.task}</p>
    </div>
  );
};

export default Todo;



