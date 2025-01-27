import React from 'react';

const Todo = props => {

  return (
    <div 
    className={`todo${props.todos.completed ? ' completed' : ''}`}
    onClick={() => props.toggleCompleted(props.todos.id)}
    >
      <p >{props.todos.task}</p>
    </div>
  );
};

export default Todo;



