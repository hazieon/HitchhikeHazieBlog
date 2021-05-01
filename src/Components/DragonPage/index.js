import React from "react";
import MyGallery from "../Gallery";
import styles from "./index.module.css";
import logo from "../../images/amazon.png";
import { Link } from "react-router-dom";
import cover from "../../images/Cover design layout.png";
import { dragonPhotosArray } from "../../dragonPhotos";
function Dragon() {
  return (
    <div className={styles.dragonContainer}>
      <div className={styles.dragonBox}>
        <div className={styles.heroImage}>
          <div className={styles.heroText}></div>
        </div>
      </div>

      <h1>Dragon Hearts</h1>
      <h3>The fantasy manga comic</h3>

      <div className={styles.memoryImageBox}>
        <img className={styles.memoryImage} src={cover} alt="front cover" />
      </div>

      <div className={styles.projectBoxButtonContainer}>
        <a href="https://www.amazon.co.uk/Dragon-Hearts-miss-Hazie/dp/1707672458">
          <button className={styles.projectBoxButton}>
            Available on
            <img
              className={styles.projectBoxLogo}
              src={logo ? logo : ""}
              alt="Amazon"
            />
          </button>
        </a>
      </div>
      <div className={styles.projectBoxButtonContainer}>
        <Link to="/dragonBook">
          <button className={styles.projectBoxButton}>Read a preview ➡</button>
        </Link>
      </div>

      <div className={styles.textBox}>
        <h2>Blurb</h2>
        <p>Yukari loves adventure, but she is always exploring alone.</p>
        <p>
          One rainy day, she meets a mysterious boy, Ryuunosuke, in a flower
          garden. He is shy, but surprisingly introduces himself as a
          <em> dragon</em>.
        </p>
        <p>
          Intrigued by the Ryuunosuke's quiet nature, Yukari invites him to
          visit her favourite spots in Tokyo. They spend the day cycling around
          the city to parks, ponds, temples, shrines and finally Tokyo Tower.
        </p>
        <p>
          The dragon boy seems to have enjoyed the day, but starts an unexpected
          discussion...
        </p>
        <p>
          Explaining that he has little time left, he invites Yukari on an
          adventure to see his world! Where will they go next?
        </p>
      </div>
      <div className={styles.textBox}>
        <h2>How it was made</h2>
        <p>
          Whilst living in India, I used my freetime to bring creative projects
          to life.
        </p>
        <p>
          Teaching English part time, I had plenty of time to brainstorm, sketch
          and build my ideas. I drew some initial character designs whilst in
          Japan, and continued drawing the comic in India.
        </p>
        <p>
          The illustrations were drawn on my tablet-laptop, taking about two
          days per page. I used a lot of my own photos and memories to create
          this story. I also got a lot of inspiration and encouragement from my
          students in India! They were always asking me 'Ma'am, what about
          Dragon story?'.
        </p>
        <p>
          The whole comic took about four months. Once the book was finished, I
          self-published it through Amazon's KDP programme. It was a big
          learning curve and rewarding process to create and publish a comic
          book by myself!
        </p>
      </div>

      <MyGallery photosArray={dragonPhotosArray} />

      <div className={styles.projectBoxButtonContainer}>
        <a href="https://www.amazon.co.uk/Dragon-Hearts-miss-Hazie/dp/1707672458">
          <button className={styles.projectBoxButton}>
            Available on
            <img
              className={styles.projectBoxLogo}
              src={logo ? logo : ""}
              alt="Amazon"
            />
          </button>
        </a>
      </div>

      <div className={styles.projectBoxButtonContainer}>
        <Link to="/dragonBook">
          <button className={styles.projectBoxButton}>Read a preview ➡</button>
        </Link>
      </div>
    </div>
  );
}

export default Dragon;
