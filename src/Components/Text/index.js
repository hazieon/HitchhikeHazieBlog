import React from "react";
import styles from "./index.module.css";

function Text({
  image,
  alt = "",
  subheading,
  textOne,
  textTwo,
  linkOne,
  linkTwo,
  buttonOneText = "",
  logoOne = "",
  buttonTwoText = "",
  logoTwo = "",
}) {
  return (
    <>
      <div className={styles.textBox}>
        <div className={styles.imageBox}>
          <img className={styles.textBoxImage} src={image} alt={alt} />
        </div>
        <div className={styles.textContainer}>
          <h2>{subheading}</h2>
          <p>{textOne}</p>
          <p>{textTwo}</p>
          {buttonOneText && (
            <>
              <a href={linkOne}>
                <button className={styles.textBoxButton}>
                  {buttonOneText}
                  <img
                    className={styles.textBoxLogo}
                    src={logoOne}
                    alt="logo"
                  />
                </button>
              </a>
              <a href={linkTwo}>
                <button className={styles.textBoxButton}>
                  {buttonTwoText}
                  <img
                    className={styles.textBoxLogo}
                    src={logoTwo}
                    alt="logo"
                  />
                </button>
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Text;
