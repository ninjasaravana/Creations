import { useCallback, useMemo, useState } from "react";
import styles from "./searchFilter.module.css";

const SearchFilter: React.FC = () => {
  const values = useMemo(() => {
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
  const [data, setData] = useState<string>("");
  const [records, setRecords] = useState<string[]>(values);

  const onChangeSearchInput = useCallback((e: any) => {
    setData(e.target.value);
    return e.target.value;
  }, []);

  const search = useCallback(() => {
    if (data.length) {
      const filteredList = values.filter((record) =>
        record.toLocaleLowerCase().includes(data.toLocaleLowerCase())
      );
      setRecords(filteredList);
    } else {
      setRecords(values);
    }
  }, [data, values]);

  return (
    <div className={styles.parent}>
      <div className={styles.head}>
        <h2>Search Filter</h2>
        <div className={styles.inputArea}>
          <input
            placeholder='Eg : Apple'
            name='Search'
            type='text'
            value={data}
            onChange={(e) => onChangeSearchInput(e)}
            maxLength={50}
          />
          <button className={styles.addButton} onClick={search}>
            Search
          </button>
        </div>
        <div className={styles.listArea}>
          {records.length ? (
            records.map((value, idx) => {
              return (
                <div className={styles.card} key={idx}>
                  <span className={styles.label}>{value}</span>
                </div>
              );
            })
          ) : (
            <div className={styles.nocard}>
              <span className={styles.label}>No records to search</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
