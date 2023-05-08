import { useCallback, useMemo, useState } from "react";
import styles from "./pagination.module.css";
import Select from "react-select";

type recordType = {
  value: number;
  label: string;
};
const Pagination: React.FC = () => {
  const records: recordType[] = [];
  for (let i = 1; i <= 50; i++) {
    records.push({ value: i, label: "Record-" + i });
  }
  const [pageContent, setPageContent] = useState<recordType[]>(
    records.slice(0, 10)
  );
  const [active, setActive] = useState(0);
  const pages = Array.from({ length: Math.ceil(records.length / 10) }, () => 0);
  const loadData = useCallback(
    (page: number) => {
      setActive(page - 1);
      setPageContent(records.slice(page * 10 - 10, page * 10));
      console.log({ records });
      console.log({ page });
      console.log("recods sliced", records.slice(page * 10 - 10, page * 10));
      return;
    },
    [records]
  );
  return (
    <div className={styles.parent}>
      <h2>Pagination</h2>

      <div className={styles.tableContainer}>
        <td className={styles.tableHeader}>Content</td>
        {pageContent.map((record, idx) => {
          return (
            <td className={styles.tableRow} key={idx}>
              {record.label}
            </td>
          );
        })}
      </div>
      <h4>***Per page 10 records***</h4>
      <div className={styles.paginationArea}>
        {pages.map((page, idx) => {
          return (
            <span
              className={
                active === idx ? styles.paginationSelection : styles.pagination
              }
              onClick={() => loadData(idx + 1)}
              key={idx}
            >
              {idx + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
