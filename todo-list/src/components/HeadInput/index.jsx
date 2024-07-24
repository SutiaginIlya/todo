import React, { useState } from "react";
import { Input } from "../Input/index";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import styles from "./index.module.css";

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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className={styles.todo_div_input}>
      <Input
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
        newTask={newTask}
      />
      <Fab
        color="primary"
        aria-label="add"
        size="small"
        onClick={handleAddTask}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
