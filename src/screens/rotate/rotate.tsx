import React, { useState } from "react";
import styles from "./rotate.module.css";

const Rotate: React.FC = () => {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = [7, 8, 9];
  const rotate = () => {
    const tempA = [...a];
    const tempB = [...b];
    const tempC = [...c];
    a[0] = tempB[0];
    a[1] = tempA[0];
    a[2] = tempA[1];
    b[0] = tempC[0];
    b[2] = tempA[2];
    c[0] = tempC[1];
    c[1] = tempC[2];
    c[2] = tempB[2];
  };

  return (
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
                <button className={styles.box} onClick={rotate}>
                  {val}
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
  );
};

export default Rotate;
