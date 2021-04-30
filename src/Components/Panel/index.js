import React from "react";
import styles from "./index.module.css";

function Panel({ image, alt, title, link, text, textTwo, buttonText, logo }) {
  return (
    <div className={styles.panelContainer}>
      <div className={styles.panelBox}>
        <div className={styles.panelBoxLeft}>
          <img className={styles.panelImage} src={image} alt={alt} />
        </div>
        <div className={styles.panelBoxRight}>
          <h2>{title}</h2>
          <p>{text}</p>
          <p>{textTwo}</p>
          <a href={link}>
            <button className={styles.panelBoxButton}>
              {buttonText}
              <img className={styles.panelBoxLogo} src={logo} alt="logo" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Panel;
