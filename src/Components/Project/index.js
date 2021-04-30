import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
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
        <Link to={link}>
          <div className={styles.projectImageBox}>
            <img className={styles.projectImage} src={image} alt={alt} />
          </div>
        </Link>
        <div className={styles.projectTextBox}>
          <h2>{title}</h2>
          <p>{text}</p>
          <p>{textTwo}</p>
          <Link to={link}>
            <button className={styles.projectBoxButton}>
              {buttonText}
              <img
                className={styles.projectBoxLogo}
                src={logo ? logo : ""}
                alt=""
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
