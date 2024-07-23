import React from "react";
import styles from "./index.module.css";
import { Buttons } from "../Buttons/index";

export const List = ({ tasks, deleteTask, moveTaskUp, moveTaskDown }) => {
  return (
    <ol>
      {tasks.map((task, index) => (
        <li className="animate__bounceIn" key={index}>
          <span className="text">{task}</span>
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
