import React from "react";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const Buttons = ({ index, deleteTask, moveTaskUp, moveTaskDown }) => {
  return (
    <span>
      <Stack spacing={2} direction="row">
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => deleteTask(index)}
        >
          <DeleteIcon />
        </IconButton>
        <Button variant="contained" onClick={() => moveTaskUp(index)}>
          Up
        </Button>
        <Button variant="contained" onClick={() => moveTaskDown(index)}>
          Down
        </Button>
      </Stack>
    </span>
  );
};
