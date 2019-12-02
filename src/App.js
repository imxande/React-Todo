import React from 'react';
import TodoList from './components/TodoComponents/TodoList';


const todo = [
  {
      task: 'Workout',
      id:1,
      completed: false
  },

  {
      task: 'Study Tk',
      id:2,
      completed: false
  },

  {
      task: 'Study React',
      id:3,
      completed: false
  },

  {
      task: 'Call my family',
      id:4,
      completed: false
  },

  {
      task: 'Work on javascript replit challenges',
      id:5,
      completed: false
  },

  {
      task: 'Read favorite book',
      id:6,
      completed: false
  },
  
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
