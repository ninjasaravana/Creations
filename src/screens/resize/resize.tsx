import { useCallback, useMemo, useState } from "react";
import styles from "./resize.module.css";

const Resize: React.FC = () => {
  const blocks = new Array(9).fill(undefined);
  const inputData = {
    name: "",
    age: "",
    id: "",
    bio: "",
  };
  const [error, setError] = useState("");
  const handleFormSubmit = useCallback((event: any) => {
    inputData.name = event.target[0].value;
    inputData.age = event.target[1].value;
    inputData.id = event.target[2].value;
    inputData.bio = event.target[3].value;
    if (inputData.name === "" || inputData.id === "") {
      event.preventDefault();
      setError("Please fill in Required Field");
    } else {
      setError("");
    }
  }, []);
  return (
    <div className={styles.parent}>
      {/* {
      blocks.map((_,index) => {
        return<div className={styles.block} key={index}>{index}</div>
        })
    } */}
      <form onSubmit={handleFormSubmit}>
        <input type='text' />
        <input type='number' />
        <input type='text' />
        <input type='text' />
        {error && <span>{error}</span>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Resize;
