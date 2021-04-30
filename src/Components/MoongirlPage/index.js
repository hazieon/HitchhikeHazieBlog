import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
// import MyTypist from "../Typist";
import Typist from "react-typist";

function Moongirl() {
  return (
    <div className={styles.moongirlContainer}>
      <div className={styles.heroImage}>
        <div className={styles.heroText}>
          {/* <h1>Hitchhike Hazie</h1>
          <h2>Take the scenic route.</h2>
          <Link className={styles.link} to="/about">
            <button className={styles.heroButton}>About Hazie</button>
          </Link> */}
        </div>
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
      <h2>The Lonely Moongirl</h2>
      <h4>Illustrated poem storybook</h4>
    </div>
  );
}

export default Moongirl;

//onTypingDone={() => setCount(0)}
