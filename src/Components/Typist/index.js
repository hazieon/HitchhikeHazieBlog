import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Typist from "react-typist";

function MyTypist({
  textOne,
  textTwo,
  textThree,
  textFour,
  countOne,
  countTwo,
  countThree,
  countFour,
}) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div className={styles.TypistBox}>
      {count ? (
        <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
          <span className={styles.TypistText}>{textOne}</span>
          <Typist.Backspace count={countOne} delay={1800} />
          <span className={styles.TypistText}>{textTwo}</span>
          <Typist.Backspace count={countTwo} delay={1800} />
          <span className={styles.TypistText}>{textThree}</span>
          <Typist.Backspace count={countThree} delay={1800} />
          <span className={styles.TypistText}> {textFour}</span>
          <Typist.Backspace count={countFour} delay={800} />
          <span> </span>
        </Typist>
      ) : (
        ""
      )}
    </div>
  );
}

export default MyTypist;
