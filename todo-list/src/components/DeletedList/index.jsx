import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "./index.module.css";

export const DeletedList = () => {
  const [trashList, setTrashList] = useState(["Пососать"]);

  const addToTrash = (trashTask) => {
    setTrashList((prev) => [...prev, trashTask]);
  };

  const returnTask = () => {};

  const clearTrashList = () => {
    setTrashList([]);
  };

  return (
    <>
      <div className={styles.trash_div}>
        <ol className={styles.ol_cont}>
          {trashList.map((task, index) => (
            <li className={styles.list} key={index}>
              <div className={styles.text}>{task}</div>
              <span>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" onClick={returnTask}>
                    Restore😂
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
