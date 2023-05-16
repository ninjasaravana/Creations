import React from "react";
import styles from "./counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter: React.FC = () => {
  const counter = useSelector((state: any) => state.counter.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const AddBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  const Reset = () => {
    dispatch({ type: "RST" });
  };
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <h2 className={styles.title}>COUNTER APP</h2>
        <h1 className={styles.counterValue}>{counter}</h1>
        <div className={styles.buttonDiv}>
          <button className={styles.counterButton} onClick={increment}>
            Increment +
          </button>
          <button className={styles.counterButton} onClick={decrement}>
            Decrement -
          </button>
          <button className={styles.counterButton} onClick={AddBy}>
            Add By 10
          </button>
          <button className={styles.counterButton} onClick={Reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
