import React from "react";
import styles from "./index.module.css";
import cover from "../../images/front cover.png";
import logo from "../../images/amazon.png";
// import MyTypist from "../Typist";
import Typist from "react-typist";
import MyGallery from "../Gallery";
import { moongirlPhotosArray } from "../../moongirlPhotos";
import { Link } from "react-router-dom";

function Moongirl() {
  return (
    <div className={styles.moongirlContainer}>
      <div className={styles.heroImage}>
        <div className={styles.heroText}></div>
      </div>
      {/* <MyTypist
        textOne="I am the girl who sits on the moon."
        textTwo="I rise at dusk and set by the noon."
        textThree="Soften the darkness & glow through the night"
        textFour="Turn golden sunrays into silver moonlight..."
      /> */}
      <div className={styles.TypistBox}>
        <Typist avgTypingDelay={115}>
          <span className={styles.TypistText}>
            I am the girl who sits on the moon.
          </span>
          <br />
          <span className={styles.TypistText}>
            I rise at dusk and set by the noon.
          </span>
          <br />
          <span className={styles.TypistText}>
            Soften the darkness & glow through the night
          </span>
          <br />
          <span className={styles.TypistText}>
            Turn golden sunrays into silver moonlight...
          </span>
          <br />

          {/* <Typist.Backspace count={44} delay={800} />
        <span> </span> */}
        </Typist>
      </div>

      <div className={styles.memoryImageBox}>
        <img className={styles.memoryImage} src={cover} alt="front cover" />
      </div>

      <h1>The Lonely Moongirl</h1>
      <h3>The illustrated poem storybook</h3>
      <div className={styles.projectBoxButtonContainer}>
        <a href="https://www.amazon.co.uk/Lonely-Moongirl-Hazie/dp/1699887489">
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
        <Link to="/moongirlBook">
          <button className={styles.projectBoxButton}>Read a preview ➡</button>
        </Link>
      </div>

      <div className={styles.textBox}>
        <h2>Blurb</h2>
        <p>Moongirl faces a dilemma the size of the universe: </p>
        <p> She is terribly lonely...</p>
        <p>
          Burnt by the sun's harsh rays, she falls into a dark despair. Can
          Starboy help her to shine again? Finally, Moongirl discovers hope in
          the last place she expects to find it.
        </p>
        <p>
          Follow Moongirl in this enchanting tale as she struggles to find her
          place in the universe.
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
          and build my ideas. I wrote the first few drafts of the poem and
          showed my friends and some students.
        </p>
        <p>
          The illustrations were drawn and coloured on my tablet-laptop, taking
          about two days per page. I got a lot of inspiration and encouragement
          from my students in India!
        </p>
        <p>
          Once the book was finished, I self-published it through Amazon's KDP
          programme. It was a big learning curve and rewarding process to create
          and publish a picture book by myself!
        </p>
      </div>
      <h2 className={styles.subheading}>Moongirl creative process - </h2>
      <MyGallery photosArray={moongirlPhotosArray} />

      <div className={styles.projectBoxButtonContainer}>
        <a href="https://www.amazon.co.uk/Lonely-Moongirl-Hazie/dp/1699887489">
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
        <Link to="/moongirlBook">
          <button className={styles.projectBoxButton}>PREVIEW NOW ➡</button>
        </Link>
      </div>
    </div>
  );
}

export default Moongirl;

//onTypingDone={() => setCount(0)}
