import styles from "./workspace.module.css";

const Workspace: React.FC = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.head}>
        <div style={{ fontSize: 20, fontWeight: 800 }}>Null vs Undefined</div>
        <div className={styles.box}>
          <span>TypeOf Null - Object</span>
          <span>TypeOf Undefined - Undefined</span>
        </div>
        <div className={styles.box}>
          <span style={{ fontWeight: 800 }}>Question</span>
          <span>`null == undefined OUTPUT : ${null == undefined}`</span>
          <span>`null === undefined OUTPUT : ${null === undefined}`</span>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
