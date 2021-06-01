import React, { useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const logo = "https://i.ibb.co/5rx9mqv/amazon.png";

const pages = [
  "https://i.ibb.co/jrgs7rx/chapter-one-cover1.png",
  "https://i.ibb.co/7rVy9xW/DH-page-1.png",
  "https://i.ibb.co/xGkQKv5/DH-page-2-2.png",
  "https://i.ibb.co/9tLMV5v/DH-page-3.png",
  "https://i.ibb.co/p1P26xx/DH-page-4.png",
  "https://i.ibb.co/9hz0cBm/DH-page-5.png",
  "https://i.ibb.co/rxB80D1/DH-page-6.png",
  "https://i.ibb.co/bbdFynr/DH-page-7.png",
  "https://i.ibb.co/J231YgM/DH-page-8.png",
];

function Comic() {
  const [pageNum, setPageNum] = useState(0);

  function increasePage() {
    if (pageNum < pages.length - 1) {
      setPageNum(pageNum + 1);
    } else return pageNum;
  }
  function decreasePage() {
    if (pageNum > 0) {
      setPageNum(pageNum - 1);
    } else return pageNum;
  }

  return (
    <div className={styles.bookContainer}>
      <div className={styles.redirectButton}>
        <Link to="/dragon">
          <button className={styles.redirectButton} id={styles.pageButton}>
            ← Back
          </button>
        </Link>
      </div>
      <h1 className={styles.title}>Dragon Hearts </h1>
      <h4 className={styles.subtitle}>
        Press 'next' to turn the page and wait for it to load.
      </h4>
      <div className={styles.bookBox}>
        <img
          className={styles.bookPage}
          src={pages[pageNum]}
          alt="dragon comic page"
        />
      </div>
      <div className={styles.buttonBox}>
        <button
          disabled={pageNum <= 0 ? true : false}
          onClick={decreasePage}
          id={styles.pageButton}
          className={styles.backButton}
        >
          back
        </button>
        <button
          disabled={pageNum >= pages.length - 1}
          onClick={increasePage}
          id={styles.pageButton}
          className={styles.nextButton}
        >
          next
        </button>
      </div>
      <div className={styles.buttonBox}>
        <a href="https://www.amazon.co.uk/Dragon-Hearts-miss-Hazie/dp/1707672458">
          <button id={styles.pageButton}>
            Find the full tale on
            <img className={styles.logo} src={logo} alt="Amazon" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Comic;
