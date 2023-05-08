import React, { useState } from "react";
import styles from "./modal.module.css";

const Modal: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openDialog = () => {
    setOpen(true);
    document.body.classList.add(styles.modalScroll);
  };
  const closeDialog = () => {
    setOpen(false);
    document.body.classList.remove(styles.modalScroll);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.head}>
        <h2>Dialog</h2>
        <div className={styles.inputArea}>
          <button className={styles.openButton} onClick={openDialog}>
            Open Dialog
          </button>
        </div>
        {open && (
          <div className={styles.container}>
            <dialog className={styles.dialogContainer}>
              <span className={styles.message}>
                Dialog opened , To close click close button
              </span>
              <div className={styles.buttonArea}>
                <button className={styles.closeButton} onClick={closeDialog}>
                  Close
                </button>
              </div>
            </dialog>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
