import React, { useState, useEffect } from "react";
import { HeadInput } from "../HeadInput/index";
import { List } from "../List/index";
import { DeletedList } from "../DeletedList";
import styles from "./index.module.css";
import { PopupAdd } from "../PopupAdd";
import { PopupDelete } from "../PopupDelete";

export const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [trashList, setTrashList] = useState([]);
  const [taskAdded, setTaskAdded] = useState(false);
  const [taskDeleted, setTaskDeleted] = useState(false);
  const [isPopupAddOpen, setIsPopupAddOpen] = useState(false);
  const [isPopupDeleteOpen, setIsPopupDeleteOpen] = useState(false);
  const [isRestoringTask, setIsRestoringTask] = useState(false);

  useEffect(() => {
    if (taskAdded && !isRestoringTask) {
      togglePopupAdd();
      setTaskAdded(false);
    }
  }, [taskAdded, isRestoringTask]);

  useEffect(() => {
    if (taskDeleted) {
      togglePopupDelete();
      setTaskDeleted(false);
    }
  }, [taskDeleted]);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
    setTaskAdded(true);
    setIsRestoringTask(false);
  };

  const deleteTask = (index) => {
    const [removedTask] = tasks.splice(index, 1);
    setTasks([...tasks]);
    setTrashList((prev) => [...prev, removedTask]);
    setTaskDeleted(true);
    setIsRestoringTask(false);
  };

  const returnTask = (trash) => {
    setTrashList(trashList.filter((t) => t !== trash));
    setTasks((prev) => [...prev, trash]);
    setTaskAdded(false);
    setIsRestoringTask(true);
  };

  const clearTrashList = () => {
    setTrashList([]);
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

  const togglePopupAdd = () => {
    setIsPopupAddOpen(!isPopupAddOpen);
  };

  const togglePopupDelete = () => {
    setIsPopupDeleteOpen(!isPopupDeleteOpen);
  };

  const tasksLength = tasks.length;

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
                tasksLength={tasksLength}
              />
            </div>
          </div>
          <div className={styles.main_trash_div}>
            <h2 className={styles.name_trash_div}>Trash</h2>
            <DeletedList
              trashList={trashList}
              returnTask={returnTask}
              clearTrashList={clearTrashList}
            />
          </div>
        </div>
        {isPopupAddOpen && <PopupAdd handlePopupAdd={togglePopupAdd} />}
        {isPopupDeleteOpen && (
          <PopupDelete handlePopupDelete={togglePopupDelete} />
        )}
      </div>
    </>
  );
};
