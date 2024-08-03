import React from "react";
import styles from "./index.module.css";
import { MovementButtons } from "../MovementButtons/index";

export const List = ({ tasks, deleteTask, moveTaskUp, moveTaskDown }) => {
  return (
    <ol className={styles.ol_cont}>
      {tasks.map((task, index) => (
        <li className={styles.list} key={index}>
          <div className={styles.text}>{task}</div>
          <MovementButtons
            index={index}
            deleteTask={deleteTask}
            moveTaskUp={moveTaskUp}
            moveTaskDown={moveTaskDown}
          />
        </li>
      ))}
    </ol>
  );
};
