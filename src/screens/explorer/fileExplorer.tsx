import React, { useCallback, useState } from "react";
import { explorerStructure, fileStruct } from "./explorer";
import styles from "./fileExplorer.module.css";

const FileExplorer: React.FC = () => {
  var tree = explorerStructure;
  const [expand, setExpand] = useState<{ [key: string]: boolean }>({});

  const expandManage = useCallback((structure: fileStruct) => {
    setExpand((prev) => {
      if (structure.isFolder && prev[structure.name] !== undefined)
        return { ...prev, [structure.name]: !prev[structure.name] };
      else if (structure.isFolder && prev[structure.name] === undefined)
        return { ...prev, [structure.name]: true };
      else return { ...prev };
    });
  }, []);

  const treeExpand = useCallback(
    (structure: fileStruct) => {
      return (
        <>
          {structure?.items?.length &&
            structure.items.map((file, idx) => (
              <div style={{ marginLeft: "50px" }}>
                <div
                  className={styles.fileBox}
                  key={idx + file.name}
                  onClick={() => expandManage(file)}
                >
                  <span> {expand[file.name] ? "+" : "-"}</span>
                  <span>{file.name}</span>
                </div>
                <div>
                  {file.items &&
                    file.isFolder &&
                    expand[file.name] &&
                    treeExpand(file)}
                </div>
              </div>
            ))}
        </>
      );
    },
    [expand, expandManage]
  );

  return (
    <div>
      <title>File Explorer</title>
      <div className={styles.container}>
        {tree.map((file, idx) => (
          <>
            <div
              className={styles.fileBox}
              key={idx + file.name}
              onClick={() => expandManage(file)}
            >
              <span> {expand[file.name] ? "+" : "-"}</span>
              <span>{file.name}</span>
            </div>
            {expand[file.name] && <>{treeExpand(file)}</>}
          </>
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;
