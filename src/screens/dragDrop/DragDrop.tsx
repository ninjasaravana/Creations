import styles from "./DragDrop.module.css";
import { useState } from "react";

type Record = {
  id: string;
  name: string;
};

const DragDrop: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([
    { id: "1", name: "First" },
    { id: "2", name: "Second" },
    { id: "3", name: "Third" },
  ]);

  const [move, setMove] = useState<Record[]>([]);

  const handleDragStart = (event: any, name: string) => {
    event.dataTransfer.setData("text/plain", [event.target.id, name]);
  };
  const handleDrop = (event: any) => {
    event.preventDefault();
    const task = event.dataTransfer.getData("text/plain").split(",");
    if (!event.target.className.includes("target")) {
      setMove([...move].filter((mov) => mov.id !== task[0]));
      setRecords([...records, { id: task[0], name: task[1] }]);
    } else {
      setRecords([...records].filter((rec) => rec.id !== task[0]));
      setMove([...move, { id: task[0], name: task[1] }]);
    }
  };
  const handleDragEnd = (event: any) => {
    event.dataTransfer.clearData();
  };

  return (
    <div className={styles.container}>
      <div
        id='source'
        className={styles.source}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => e.preventDefault()}
      >
        {records.map((rec, idx) => (
          <div
            id={rec.id}
            className={styles.card}
            key={idx}
            onDragStart={(e) => handleDragStart(e, rec.name)}
            onDragEnd={(e) => handleDragEnd(e)}
            draggable
          >
            <span>{rec.name}</span>
          </div>
        ))}
      </div>
      <div
        id='target'
        className={styles.target}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => e.preventDefault()}
      >
        {move.length > 0 &&
          move.map((mov, idx) => (
            <div
              id={mov.id}
              className={styles.card}
              key={idx}
              onDragStart={(e) => handleDragStart(e, mov.name)}
              onDragEnd={(e) => handleDragEnd(e)}
              draggable
            >
              <span>{mov.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DragDrop;
