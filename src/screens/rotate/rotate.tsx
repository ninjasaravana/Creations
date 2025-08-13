import React, { useCallback, useState, useEffect } from "react";
import styles from "./rotate.module.css";

const Rotate: React.FC<{ tata: string }> = ({ tata }) => {
  const p1 = new Promise((res, rej) => {
    setTimeout(function () {
      res("p1");
    }, 5000);
  });

  const p2 = new Promise((res, rej) => {
    setTimeout(function () {
      res("p2");
    }, 2000);
  });
  function handle1() {
    return "BYE";
  }
  let h1 = handle1(); //.then((d) => d);
  console.log("HANDLE 1", h1);
  async function handle() {
    let val = await p1;
    console.log("FIRST");
    console.log(val);
    let val2 = await p2;
    console.log("SECOND");
    console.log(val2);
  }
  // handle();

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
