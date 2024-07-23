import React from "react";

export const Input = ({handleInputChange, handleKeyDown, newTask}) => {
    return (
        <>
        <input
        className="todo-input"
        type="text"
        value={newTask}
        placeholder="Enter new task..."
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
        </>
    )
}