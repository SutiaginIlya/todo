import React from "react";
import styles from "./index.module.css";

export const Input = ({ handleInputChange, handleKeyDown, newTask }) => {
  return (
    <>
      <input
        className={styles.todo_input}
        type="text"
        value={newTask}
        placeholder="Enter new task..."
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
