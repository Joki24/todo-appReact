// TodoList.jsx
import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todos, index) => (
        <li key={index}>
          <input type="checkbox" />
          {todos}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;