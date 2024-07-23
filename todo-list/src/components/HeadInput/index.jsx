import React, { useState } from "react";

function Input({ addTask }) {
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  }

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
}

export default Input;
