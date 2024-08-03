import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const MovementButtons = ({
  index,
  deleteTask,
  moveTaskUp,
  moveTaskDown,
  tasksLength,
}) => {
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
        <Button
          variant="contained"
          onClick={() => moveTaskUp(index)}
          disabled={index === 0}
        >
          Go up
        </Button>
        <Button
          variant="contained"
          onClick={() => moveTaskDown(index)}
          disabled={index === tasksLength - 1}
        >
          Go down
        </Button>
      </Stack>
    </span>
  );
};
