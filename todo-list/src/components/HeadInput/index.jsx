import React, { useState } from "react";
import { Input } from "../Input/index";
import styles from "./index.module.css"

export const HeadInput = ({ addTask }) => {
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
    <div className={styles.todo_div_input}>
      <Input 
      handleInputChange={handleInputChange}
      handleKeyDown={handleKeyDown}
      newTask={newTask}
      />
      <button className="add-btn" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};
