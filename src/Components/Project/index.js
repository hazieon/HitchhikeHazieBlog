import React from "react";
import styles from "./index.module.css";

function Project({
  image,
  alt,
  title,
  link,
  text,
  textTwo,
  buttonText,
  logo = "",
}) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectBox}>
        <div className={styles.projectImageBox}>
          <img className={styles.projectImage} src={image} alt={alt} />
        </div>
        <div className={styles.projectTextBox}>
          <h2>{title}</h2>
          <p>{text}</p>
          <p>{textTwo}</p>
          <a href={link}>
            <button className={styles.projectBoxButton}>
              {buttonText}
              <img
                className={styles.projectBoxLogo}
                src={logo ? logo : ""}
                alt=""
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
