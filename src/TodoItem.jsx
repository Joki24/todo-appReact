import React from "react";

const TodoItem = ({ todos }) => {
    return (
        <li>
            <input type="checkbox" />
            {todos}
        </li>
    );
};

export default TodoItem;