import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

function PageLink({ link, text, pageName }) {
  return (
    <div className={styles.pageLinkContainer}>
      <div className={styles.pageLinkBox}>
        <h3 className={styles.blogLink}>
          {text}
          <Link to={link} className={styles.link}>
            <button className={styles.textBoxButton}>{pageName} </button>
          </Link>
        </h3>
      </div>
    </div>
  );
}
//Read adventure tales on the
//BLOG
export default PageLink;
