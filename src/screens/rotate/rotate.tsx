import React, { useCallback, useState } from "react";
import styles from "./rotate.module.css";

const Rotate: React.FC = () => {
  const [a, setA] = useState([1, 2, 3]);
  const [b, setB] = useState([4, 0, 5]);
  const [c, setC] = useState([6, 7, 8]);
  const rotate = useCallback(() => {
    const tempA = [...a];
    const tempB = [...b];
    const tempC = [...c];
    setA([tempB[0], tempA[0], tempA[1]]);
    setB([tempC[0], tempB[1], tempA[2]]);
    setC([tempC[1], tempC[2], tempB[2]]);
  }, [a, b, c]);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Rotate Clockwise</span>
      <div className={styles.top}>
        <div className={styles.layer}>
          {a.map((val, idx) => {
            return (
              <span className={styles.box} key={idx}>
                {val}
              </span>
            );
          })}
        </div>
        <div className={styles.layer}>
          {b.map((val, idx) => {
            return (
              <span className={styles.box} key={idx}>
                {idx === 1 ? (
                  <button
                    className={`${styles.box} ${styles.boxColor}`}
                    onClick={rotate}
                  >
                    ↻
                  </button>
                ) : (
                  val
                )}
              </span>
            );
          })}
        </div>
        <div className={styles.layer}>
          {c.map((val, idx) => {
            return (
              <span className={styles.box} key={idx}>
                {val}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rotate;
