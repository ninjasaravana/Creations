import React, { useCallback, useState, useMemo } from "react";
import styles from "./checkbox.module.css";

type checkState = {
  value: string;
  checked: boolean;
  index: number;
};
const Checkbox: React.FC = () => {
  const listValues = useMemo(() => {
    return ["Apple", "App", "Ant", "Sea", "Snake", "Sand", "Seal", "zebra"];
  }, []);
  const listWithCheckState = listValues.map((list, idx) => {
    return {
      value: list,
      checked: false,
      index: idx,
    };
  });
  const [checked, setChecked] = useState<string>("");
  const [multiChecked, setMultiChecked] =
    useState<checkState[]>(listWithCheckState);
  const [radio, setRadio] = useState<string>("Apple");

  const handleSingleSelect = useCallback(
    (data: string) => {
      if (checked === data) {
        setChecked("");
      } else {
        setChecked(data);
      }
    },
    [checked]
  );
  const handleMultiselect = useCallback(
    (data: checkState) => {
      if (!data.checked) {
        const correctedState = multiChecked.map((c) => {
          return {
            value: c.value,
            checked: c.value === data.value ? true : c.checked,
            index: c.index,
          };
        });
        setMultiChecked(correctedState);
      } else {
        const correctedState = multiChecked.map((c) => {
          return {
            value: c.value,
            checked: c.value === data.value ? false : c.checked,
            index: c.index,
          };
        });
        setMultiChecked(correctedState);
      }
    },
    [multiChecked]
  );

  const handleRadioInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRadio(e.target.value);
    },
    []
  );

  const checkedRecords = useMemo(() => {
    const selected = multiChecked
      .filter((data) => data.checked === true)
      .map((d) => d.value)
      .toString();
    return selected;
  }, [multiChecked]);

  return (
    <div className={styles.parent}>
      <div className={styles.cover}>
        <div className={styles.inputArea}>
          <h3>CheckBox - SingleSelect</h3>
          {listValues.map((data, idx) => {
            return (
              <div className={styles.cover} key={idx}>
                <input
                  className={styles.checkInput}
                  key={idx}
                  type='checkbox'
                  multiple={false}
                  checked={data === checked}
                  onChange={() => handleSingleSelect(data)}
                />
                <label className={styles.checkLabel}>{data}</label>
              </div>
            );
          })}
          <h4>Selected checkbox values :</h4>
          <span className={styles.message}>{checked}</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.inputArea}>
          <h3>CheckBox - MultiSelect</h3>
          {multiChecked.map((data, idx) => {
            return (
              <div className={styles.cover} key={idx}>
                <input
                  className={styles.checkInput}
                  key={idx}
                  type='checkbox'
                  multiple={false}
                  checked={data.checked}
                  onChange={() => handleMultiselect(data)}
                />
                <label className={styles.checkLabel}>{data.value}</label>
              </div>
            );
          })}
          <h4>Selected checkbox values :</h4>
          <span className={styles.message}>{checkedRecords}</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.inputArea}>
          <h3>Radio SinglSelect</h3>
          {listValues.map((data, idx) => {
            return (
              <div className={styles.cover} key={idx}>
                <input
                  className={styles.checkInput}
                  key={idx}
                  type='radio'
                  value={data}
                  checked={radio === data}
                  onChange={handleRadioInput}
                />
                <label className={styles.checkLabel}>{data}</label>
              </div>
            );
          })}
          <h4>Selected radio value :</h4>
          <span className={styles.message}>{radio}</span>
        </div>
      </div>
    </div>
  );
};
export default Checkbox;
