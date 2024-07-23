import React, { useState } from "react";

export const Input = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleAddTask();
    }
  }

  return (
    <div className="todo-div-input">
      <input
        className="todo-input"
        type="text"
        value={newTask}
        placeholder="Enter new task..."
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className="add-btn" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};
