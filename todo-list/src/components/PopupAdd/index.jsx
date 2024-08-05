import Button from "@mui/material/Button";
import styles from "./index.module.css";

export const PopupAdd = ({ handlePopupAddCancel }) => {
  return (
    <>
      <div className={styles.add_popup}>
        <div className={styles.add_popup_background}>
          <span className={styles.add_popup_content}>Новая задача добавлена</span>
          <Button variant="contained" onClick={handlePopupAddCancel}>
            Отменить добавление
          </Button>
        </div>
      </div>
    </>
  );
};
