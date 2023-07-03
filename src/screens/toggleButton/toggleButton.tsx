import React from "react";
import styles from "./toggleButton.module.css";

const ToggleButton: React.FC = () => {
  return (
    <div className={styles.fieldContainer}>
      <h2 className={styles.title}>TextBox</h2>
      <input className={styles.nameField} type='text' name='name' />
      <label className={styles.nameFieldLabel}>Name</label>
    </div>
  );
};

export default ToggleButton;
