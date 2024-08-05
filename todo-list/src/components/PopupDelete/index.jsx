import Button from "@mui/material/Button";
import styles from "./index.module.css";

export const PopupDelete = ({ handlePopupDeleteCancel }) => {
  return (
    <>
      <div className={styles.delete_popup}>
        <div className={styles.delete_popup_background}>
          <div className={styles.delete_popup_content}>Поместить задачу в Trash?</div>
          <Button variant="contained" onClick={handlePopupDeleteCancel}>
            Отменить удаление
          </Button>
        </div>
      </div>
    </>
  );
};
