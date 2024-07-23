import React from "react";

export const Buttons = ({ index, deleteTask, moveTaskUp, moveTaskDown }) => {
  return (
    <>
      <button className="delete-btn" onClick={() => deleteTask(index)}>
        Delete
      </button>
      <button className="delete-btn" onClick={() => moveTaskUp(index)}>
        Up
      </button>
      <button className="delete-btn" onClick={() => moveTaskDown(index)}>
        Down
      </button>
    </>
  );
};
