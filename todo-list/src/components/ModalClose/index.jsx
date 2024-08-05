import styles from "./index.module.css";

export const ModalClose = ({ handleModalClose }) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modal_background}>
          <div className={styles.modal_content}>Поместить задачу в Trash?</div>
          <button onClick={handleModalClose}>Закрыть</button>
        </div>
      </div>
    </>
  );
};
