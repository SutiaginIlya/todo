import React from "react";
import styles from './index.module.css';

export const List = ({ tasks, deleteTask, moveTaskUp, moveTaskDown }) => {
  return (
    <ol>
      {tasks.map((task, index) => (
        <li className="animate__bounceIn" key={index}>
          <span className="text">{task}</span>
          <button className="delete-btn" onClick={() => deleteTask(index)}>
            Delete
          </button>
          <button className="delete-btn" onClick={() => moveTaskUp(index)}>
            Up
          </button>
          <button className="delete-btn" onClick={() => moveTaskDown(index)}>
            Down
          </button>
          <span className={styles.test_color}>
            test text
          </span>
        </li>
      ))}
    </ol>
  );
}

