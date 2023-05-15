import React from "react";
import styles from "./foodApp.module.css";
import { useDispatch, useSelector } from "react-redux";

const FoodApp: React.FC = () => {
  const food = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <h2 className={styles.title}>FOOD APP</h2>
        <h1 className={styles.counterValue}>{food}</h1>
        <div className={styles.foodCard}>
          <label className={styles.foodName}>Burger</label>
          <input
            className={styles.foodCount}
            type='number'
            onChange={() => {}}
          />
          <button className={styles.counterButton} onClick={() => {}}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodApp;
