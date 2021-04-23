import React from "react";
import styles from "./index.module.css";

function Panel({ image, alt, title, link, text, buttonText, logo }) {
  return (
    <>
      <div className={styles.panelBox}>
        <div className={styles.panelBoxLeft}>
          <img className={styles.panelImage} src={image} alt={alt} />
        </div>
        <div className={styles.panelBoxRight}>
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={link}>
            <button className={styles.panelBoxButton}>
              {buttonText}
              <img className={styles.panelBoxLogo} src={logo} alt="logo" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Panel;
