//App.jsx
import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css'


function App() {
  //2. State Management
  const [todos, setTodos] = useState([
  'Learn React',
  'Build a todo app',
  'Deploy'
  ]);
  
    const addTodo = (newTodo) => {
      setTodos([...todos, newTodo]);
    };


  return (
    <>
      <div className='container'>
            <h1>TODO App</h1>
            <TodoInput onSubmit={addTodo}/>
            <TodoList todos={todos}/>
      </div>
    </>
  );
}

export default App;
