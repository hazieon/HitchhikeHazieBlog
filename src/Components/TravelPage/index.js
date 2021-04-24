import React from "react";
import styles from "./index.module.css";

function TravelPage() {
  return (
    <>
      <div className={styles.travelBox}>
        <div className={styles.heroImage}>
          <div className={styles.heroText}>
            {/* <h1>Travel & </h1>
            <h1>Adventure</h1> */}
          </div>
        </div>
        <h1>Travel & Adventure</h1>
        <h3>Here is the story of how I came to travel:</h3>
      </div>
    </>
  );
}

export default TravelPage;

/* <h2>Take the scenic route.</h2> */
/* <Link className={styles.link} to="/about">
            <button className={styles.heroButton}>About Hazie</button>
          </Link> */
