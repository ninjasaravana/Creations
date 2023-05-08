import React, { useCallback, useState, useMemo } from "react";
import styles from "./checkbox.module.css";

type checkState = {
  label: string;
  status: boolean;
  // index:number;
};
const Checkbox: React.FC = () => {
  const listValues = useMemo(() => {
    return [
      "Apple",
      "App",
      "Ant",
      "Sea",
      "Snake",
      "Sand",
      "Seal",
      "zebra",
      "$123",
      "45690",
    ];
  }, []);
  const listWithCheckState = listValues.map((list, idx) => {
    return {
      label: list,
      status: false,
      // index:idx
    };
  });
  const [checked, setChecked] = useState<checkState[]>(listWithCheckState);
  const [selected, setSelected] = useState<string[]>([]);

  const handleChecked = useCallback(
    (data: checkState) => {
      if (!data.status) {
        const correctedState = checked.map((c) => {
          return {
            label: data.label,
            status: c.label === data.label ? true : false,
          };
        });
        setChecked(correctedState);
      } else {
        const correctedState = checked.map((c) => {
          return {
            label: data.label,
            status: c.label === data.label ? false : true,
          };
        });
        setChecked(correctedState);
      }
    },
    [checked, selected]
  );
  console.log({ selected });
  return (
    <div className={styles.parent}>
      <div className={styles.cover}>
        <div className={styles.inputArea}>
          <h2>CheckBox</h2>
          {listWithCheckState.map((data, idx) => {
            return (
              <div className={styles.cover} key={idx}>
                <input
                  key={idx}
                  type='checkbox'
                  multiple={true}
                  checked={data.status}
                  onChange={() => handleChecked(data)}
                />
                <label key={idx}>{data.label}</label>
              </div>
            );
          })}
          <h3>Selected checkbox values : </h3>
        </div>
        <div className={styles.divider} />
        <div className={styles.inputArea}>
          <h2>Radio</h2>

          <h3>Selected radio value :</h3>
        </div>
      </div>
    </div>
  );
};
export default Checkbox;
