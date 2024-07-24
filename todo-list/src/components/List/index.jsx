import React from "react";
import styles from "./index.module.css";
import { Buttons } from "../Buttons/index";

export const List = ({ tasks, deleteTask, moveTaskUp, moveTaskDown }) => {
  return (
    <ol className={styles.ol_cont}>
      {tasks.map((task, index) => (
        <li className={styles.list} key={index}>
          <div className={styles.text}>{task}</div>
          <Buttons
            index={index}
            deleteTask={deleteTask}
            moveTaskUp={moveTaskUp}
            moveTaskDown={moveTaskDown}
          />
          {/* <span className={styles.test_color}>test text</span> */}
        </li>
      ))}
    </ol>
  );
};
