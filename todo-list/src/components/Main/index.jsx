import React, { useState, useEffect } from "react";
import { HeadInput } from "../HeadInput/index";
import { List } from "../List/index";
import { DeletedList } from "../DeletedList";
import styles from "./index.module.css";

export const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click) {
      alert("Задача удалена");
    }
  }, [click]);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setClick(true);
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
    <>
      <div className={styles.main_div}>
        <div className={styles.head_text_div}>
          <h1 className={styles.head_text}>To Do List</h1>
        </div>
        <div className={styles.all_lists_div}>
          <div className={styles.main_list_div}>
            <h2 className={styles.name_list_div}>List</h2>
            <div className={styles.list_div}>
              <HeadInput addTask={addTask} />
              <List
                tasks={tasks}
                deleteTask={deleteTask}
                moveTaskUp={moveTaskUp}
                moveTaskDown={moveTaskDown}
              />
            </div>
          </div>
          <div className={styles.main_trash_div}>
            <h2 className={styles.name_trash_div}>Trash</h2>
            <DeletedList />
          </div>
        </div>
      </div>
    </>
  );
};
