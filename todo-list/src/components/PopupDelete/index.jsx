import Button from "@mui/material/Button";
import styles from "./index.module.css";

export const PopupDelete = ({ handlePopupDelete }) => {
  return (
    <>
      <div className={styles.delete_popup}>
        <div className={styles.delete_popup_background}>
          <div className={styles.delete_popup_content}>Поместить задачу в Trash?</div>
          <Button variant="contained" onClick={handlePopupDelete}>
            Отменить удаление
          </Button>
        </div>
      </div>
    </>
  );
};
