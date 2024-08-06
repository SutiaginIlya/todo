import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./index.module.css";

export const DeletedList = ({ trashList, returnTask, clearTrashList }) => {
  return (
    <>
      <div className={styles.trash_div}>
        <ol className={styles.ol_cont}>
          {trashList.map((trash, index) => (
            <li className={styles.list} key={index}>
              <div className={styles.text}>{trash}</div>
              <span>
                <Stack spacing={2} direction="row">
                  <IconButton
                    aria-label="delete"
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <Button
                    variant="contained"
                    onClick={() => returnTask(trash)}
                  >
                    Return
                  </Button>
                </Stack>
              </span>
            </li>
          ))}
        </ol>
        <Button variant="contained" onClick={clearTrashList}>
          Clear all trash
        </Button>
      </div>
    </>
  );
};
