import React from 'react';
import TodoList from './components/TodoComponents/TodoList';


const todo = [
  {
      task: 'Workout',
      id:Date.now(),
      completed: false
  },

  {
      task: 'Study Tk',
      id:Date.now(),
      completed: false
  },

  {
      task: 'Study React',
      id:Date.now(),
      completed: false
  },

  {
      task: 'Call my family',
      id:Date.now(),
      completed: false
  },

  {
      task: 'Work on javascript replit challenges',
      id:Date.now(),
      completed: false
  },

  {
      task: 'Read favorite book',
      id:Date.now(),
      completed: false
  },
  
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo: todo
    }
  }

  render() {
    console.log(todo); // checking if I have my state
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
