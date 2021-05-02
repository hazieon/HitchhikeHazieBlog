import React from "react";
import styles from "./index.module.css";

function Contact({ image, alt, title, link, text, textTwo, buttonText, logo }) {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactBox}>
        <h1>Contact Me</h1>
      </div>
    </div>
  );
}

export default Contact;
