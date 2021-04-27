import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
function Lifestyle() {
  return (
    <>
      <div className={styles.lifestyleBox}>
        <div className={styles.heroImage}>
          <div className={styles.heroText}>
            <h1>Lifestyle</h1>
            {/* 
            <h2>Take the scenic route.</h2>
            <Link className={styles.link} to="/about">
              <button className={styles.heroButton}>About Hazie</button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lifestyle;
