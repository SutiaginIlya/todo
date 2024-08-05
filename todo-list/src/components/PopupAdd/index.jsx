import styles from "./index.module.css";

export const PopupAdd = ({ handlePopupClose }) => {
  return (
    <>
      <div className={styles.popup}>
        <div className={styles.popup_background}>
          <div className={styles.popup_content}>Новая задача добавлена</div>
          <button onClick={handlePopupClose}>Закрыть</button>
        </div>
      </div>
    </>
  );
};
