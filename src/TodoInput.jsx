//TodoInput.jsx

import React, { useState } from "react";

const TodoInput = ({ onSubmit }) => {
    const [task, setTask] = useState('');
    //3. Input Filed and Submit Button
  
const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  //4. Handling submit button
  const handleAddTodo = () => {
    if (task.trim() !== '') {
      onSubmit(task);
      setTask('');
    }
  };
  

return (
    <>
      <div className="container">
        <input
            type="text"
            placeholder='Add a new task'
            onChange={handleInputChange}
            value={task}
        />
        <br />
        <button onClick={handleAddTodo}>Add</button>
        </div>     
    </>
  );
};

export default TodoInput;