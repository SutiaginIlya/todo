import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./index.module.css";

export const Buttons = ({ index, deleteTask, moveTaskUp, moveTaskDown }) => {
  return (
    <span className="button-box">
      <IconButton
        aria-label="delete"
        color="error"
        onClick={() => deleteTask(index)}
      >
        <DeleteIcon />
      </IconButton>
      <Button  onClick={() => moveTaskUp(index)}>
        Up
      </Button>
      <Button  onClick={() => moveTaskDown(index)}>
        Down
      </Button>
      <Fab color="primary" aria-label="edit" size="small">
        <EditIcon size="large"/>
      </Fab>
    </span>
  );
};
