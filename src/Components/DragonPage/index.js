import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
function Dragon() {
  return (
    <div className={styles.dragonContainer}>
      <div className={styles.dragonBox}></div>
    </div>
  );
}

export default Dragon;
