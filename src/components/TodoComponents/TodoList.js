// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
    constructor(){
        super();
        this.state = {
            
        };
    }

    render(){
        return (
            <div>
                {/* {todo.map((item)=>{

                })} */}
                <h3>My TodoList goes here </h3>
            </div>

        )     
        
    }
}

export default TodoList;
