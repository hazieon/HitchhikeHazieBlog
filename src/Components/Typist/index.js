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
    // document.title = `You clicked ${count} times`;
    // console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
    <div className={styles.TypistBox}>
      {/* <h1 className={styles.TypistTitle}>Welcome</h1> */}
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

// import React from "react";
// import Typist from "react-typist";

// export default function MyTypist({ text }) {
//   return (
//     <>
//       <Typist>
//         <h1 className="my-custom-class">{text}</h1>
//       </Typist>
//       <Typist>
//         <span>こんにちは！</span>
//         <Typist.Backspace count={7} delay={500} />
//         <span> 안녕하세요! </span>
//       </Typist>
//     </>
//   );
// }

/* <Typist>
  <span className="my-custom-class"> First Sentence </span>
  <br />
  <div className="container">
    <p> This will be animated after first sentence is complete </p>
    <MyComponent prop1="val1"> More text. </MyComponent>
  </div>
  Final sentence
</Typist> */

/* <Typist>
  <span> First Sentence </span>
  <Typist.Backspace count={8} delay={200} />
  <span> Phrase </span>
</Typist> */
