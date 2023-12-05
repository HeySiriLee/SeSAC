import styles from "../styles/origin.module.css";

function CssModule() {
  return (
    <>
      <div className={styles.origin}>
        <div className={`${styles.box} ${styles.red}`}></div>
        <div className={[styles.box, styles.orange].join(" ")}></div>
        <div className="box yellow"></div>
        <div className="box green"></div>
        <div className="box blue"></div>
        <div className="box navy"></div>
        <div className="box purple"></div>
      </div>
    </>
  );
}

export default CssModule;
