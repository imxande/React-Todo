// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props.todos)
    return (
        
        <div>
            {props.todos.map( item => (
                <Todo key = {item.id} todos = {item} />
            ))}
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoList;
