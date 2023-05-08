import { useCallback, useMemo, useState } from "react";
import styles from "./dropDown.module.css";
import Select from "react-select";

const DropDown: React.FC = () => {
  const dropDownOptions = useMemo(() => {
    return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }, []);
  const dropDownOptions1 = useMemo(() => {
    return [
      {
        value: "1",
        label: "1",
      },
      {
        value: "2",
        label: "2",
      },
      {
        value: "3",
        label: "3",
      },
      {
        value: "4",
        label: "4",
      },
      {
        value: "5",
        label: "5",
      },
      {
        value: "6",
        label: "6",
      },
    ];
  }, []);
  const [value, setValue] = useState("0");
  const [value1, setValue1] = useState<{ value: string; label: string }>({
    value: "",
    label: "",
  });
  const selectedValue = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
    },
    []
  );

  const handleSelectChange = (value1: any) => {
    setValue1(value1);
  };
  return (
    <div className={styles.parent}>
      <div className={styles.cover}>
        <div className={styles.inputArea}>
          <h2>Drop Down - Normal</h2>
          <select
            className={styles.selectMenu}
            name='number'
            onChange={(e) => selectedValue(e)}
            defaultValue={dropDownOptions[0]}
          >
            {dropDownOptions.map((val, idx) => {
              return (
                <option className={styles.optionsMenu} key={idx}>
                  {val}
                </option>
              );
            })}
          </select>
          <h3>Selected drop down value : {value}</h3>
        </div>
        <div className={styles.divider} />
        <div className={styles.inputArea}>
          <h2>Drop Down - React Component</h2>
          <Select
            className={styles.selectMenu}
            options={dropDownOptions1}
            onChange={handleSelectChange}
          />
          <h3>Selected drop down value : {value1?.label}</h3>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
