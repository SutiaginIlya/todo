import Button from "@mui/material/Button";
import styles from "./index.module.css";

export const PopupAdd = ({ handlePopupAdd }) => {
  return (
    <>
      <div className={styles.add_popup}>
        <div className={styles.add_popup_background}>
          <span className={styles.add_popup_content}>Новая задача добавлена</span>
          <Button variant="contained" onClick={handlePopupAdd}>
            Отменить добавление
          </Button>
        </div>
      </div>
    </>
  );
};
