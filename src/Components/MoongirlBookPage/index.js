import React, { useState } from "react";
import styles from "./index.module.css";
// import logo from "../../images/amazon.png";
// import image1 from "../../images/book.png";
// import image2 from "../../images/book2.png";
// import image3 from "../../images/book3.png";
// import image4 from "../../images/book4.png";
// import image5 from "../../images/book5.png";
// import image6 from "../../images/book6.png";
// import image7 from "../../images/book7.png";
// import image8 from "../../images/book8.png";
import { Link } from "react-router-dom";

const logo = "https://i.ibb.co/5rx9mqv/amazon.png";

const pages = [
  "https://i.ibb.co/TgCcbzw/book.png",
  "https://i.ibb.co/5k2gjMP/book2.png",
  "https://i.ibb.co/pb6CLWn/book3.png",
  "https://i.ibb.co/h1swy7g/book4.png",
  "https://i.ibb.co/JKxzzyh/book5.png",
  "https://i.ibb.co/ZVTgJmw/book6.png",
  "https://i.ibb.co/fQFZg4p/book7.png",
  "https://i.ibb.co/FxrYJtp/book8.png",
];

function Book() {
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
        <Link to="/moongirl">
          <button className={styles.redirectButton} id={styles.pageButton}>
            ← Back
          </button>
        </Link>
      </div>
      <h1 className={styles.title}>The Lonely Moongirl</h1>
      <h4 className={styles.subtitle}>
        Press 'next' to turn the page and wait for it to load.
      </h4>
      <div className={styles.bookBox}>
        <img
          className={styles.bookPage}
          src={pages[pageNum]}
          alt="Moongirl story page"
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
        <a href="https://www.amazon.co.uk/Lonely-Moongirl-Hazie/dp/1699887489">
          <button id={styles.pageButton}>
            Find the full tale on
            <img className={styles.logo} src={logo} alt="Amazon" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Book;
