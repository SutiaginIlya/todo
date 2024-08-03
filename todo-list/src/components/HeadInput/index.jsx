import React, { useState, useEffect } from "react";
import { Input } from "../Input/index";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import styles from "./index.module.css";

export const HeadInput = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click) {
      alert("Новая задача добавлена");
      console.log(1);
    }
  }, [click]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
      setClick(true);
      console.log(2);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
      setClick(true);
      console.log(3);
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
