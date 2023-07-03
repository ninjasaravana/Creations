import React, { useCallback, useState } from "react";
import { explorerStructure, fileStruct } from "./explorer";
import styles from "./fileExplorer.module.css";
const FileExplorer: React.FC = () => {
  var input = explorerStructure;
  const [expand, setExpand] = useState<{ [key: string]: boolean }>({});

  const expandFiles = useCallback((file: fileStruct) => {
    setExpand((prevExpand) => {
      if (file.isFolder && prevExpand[file.name]) {
        return { ...prevExpand, [file.name]: !prevExpand[file.name] };
      } else if (file.isFolder && !prevExpand[file.name]) {
        return { ...prevExpand, [file.name]: true };
      } else {
        return { ...prevExpand, [file.name]: false };
      }
    });
  }, []);

  const fileTemplate = useCallback(
    (file: fileStruct, idx: number) => {
      return (
        <>
          <div
            className={styles.title}
            key={idx}
            onClick={() => expandFiles(file)}
          >
            {file.name}
          </div>
        </>
      );
    },
    [expandFiles]
  );

  const expTemplate = useCallback(
    (file: fileStruct, idx: number) => {
      return (
        <>
          {fileTemplate(file, idx)}
          {expand[file.name] && file?.items && (
            <div key={idx} style={{ marginLeft: 32 }}>
              {file?.items.map((item, index) => {
                return expTemplate(item, index);
              })}
            </div>
          )}
        </>
      );
    },
    [expand, fileTemplate]
  );

  return (
    <div className={styles.container}>
      <span className={styles.heading}>File Explorer</span>
      {input.map((file, idx) => {
        return expTemplate(file, idx);
      })}
    </div>
  );
};

export default FileExplorer;
