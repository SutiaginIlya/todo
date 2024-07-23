import React, { useState } from "react";
import { Input } from "../HeadInput/index";
import { List } from "../List/index";

export const Main = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="main-div">
      <h1 className="animate__fadeIn">To Do List</h1>
      <Input addTask={addTask} />
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        moveTaskUp={moveTaskUp}
        moveTaskDown={moveTaskDown}
      />
    </div>
  );
};
