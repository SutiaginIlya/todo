import Button from "@mui/material/Button";
import styles from "./index.module.css";

export const Popup = ({ handleCancel, type }) => {
  return (
    <>
      <div className={styles.popup}>
        <div
          className={`${styles.popup_background} ${
            type === "add" && styles.add
          } ${type === "delete" && styles.delete} ${
            type === "return" && styles.return
          }`}
        >
          <span className={styles.popup_content}>
            {type === "add" && "Задача добавлена в List"}
            {type === "delete" && "Задача помещена в Trash"}
            {type === "return" && "Задача возвращена из Trash"}
          </span>
          {type === "delete" && (
            <Button variant="contained" onClick={handleCancel}>
              Отменить удаление
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
