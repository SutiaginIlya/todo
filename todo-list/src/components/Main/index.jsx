import React, { useState, useEffect, useRef } from "react";
import { HeadInput } from "../HeadInput/index";
import { List } from "../List/index";
import { DeletedList } from "../DeletedList";
import { Popup } from "../Popup";
import styles from "./index.module.css";

export const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [trashList, setTrashList] = useState([]);
  const [lastAddedTask, setLastAddedTask] = useState(null);
  const [lastDeletedTask, setLastDeletedTask] = useState(null);
  const [popupType, setPopupType] = useState(null);

  const tasksLengthRef = useRef(tasks.length);
  const trashListLengthRef = useRef(trashList.length);

  useEffect(() => {
    if (lastAddedTask) {
      setPopupType("add");
    }
    const timer = setTimeout(() => {
      setPopupType(null);
      setLastAddedTask(null);
    }, 10000);

    return () => clearTimeout(timer);
  }, [lastAddedTask]);

  useEffect(() => {
    if (lastDeletedTask) {
      setPopupType("delete");
    }
    const timer = setTimeout(() => {
      setPopupType(null);
      setLastDeletedTask(null);
    }, 10000);

    return () => clearTimeout(timer);
  }, [lastDeletedTask]);

  useEffect(() => {
    const prevTrashListLength = trashListLengthRef.current;

    const trashListChanged = trashList.length < prevTrashListLength;

    if (trashListChanged) {
      console.log("треш уменьшился");
      setPopupType("return");
    }

    trashListLengthRef.current = trashList.length;

    const timer = setTimeout(() => {
      setPopupType(null);
    }, 10000);

    return () => clearTimeout(timer);
  }, [tasks, trashList]);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
    setLastAddedTask(newTask);
  };

  const deleteTask = (index) => {
    const [removedTask] = tasks.splice(index, 1);
    setTasks([...tasks]);
    setTrashList((prev) => [...prev, removedTask]);
    setLastDeletedTask(removedTask);
  };

  const returnTask = (trash) => {
    setTrashList(trashList.filter((t) => t !== trash));
    setTasks((prev) => [...prev, trash]);
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

  const handlePopupCancel = () => {
    if (popupType === "add" && lastAddedTask) {
      setTasks((prev) => prev.filter((task) => task !== lastAddedTask));
      setLastAddedTask(null);
      setPopupType(false);
    } else if (popupType === "delete" && lastDeletedTask) {
      setTrashList((prev) => prev.filter((task) => task !== lastDeletedTask));
      setTasks((prev) => [...prev, lastDeletedTask]);
      setLastDeletedTask(null);
      setPopupType(false);
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
                tasksLength={tasksLengthRef}
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
        {popupType && (
          <Popup handleCancel={handlePopupCancel} type={popupType} />
        )}
      </div>
    </>
  );
};
