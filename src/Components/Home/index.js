import styles from "./index.module.css";
import { Link } from "react-router-dom";

import travelImg from "../../images/boseong.jfif";
import skillsImg from "../../images/moongirl.jpg";
import lifestyleImg from "../../images/received_2396607630564628.jpeg";

function Homepage() {
  return (
    <div className="Homepage">
      <div className={styles.heroImage}>
        <div className={styles.heroText}>
          <h1>Hitchhike Hazie</h1>
          <h2>Take the scenic route.</h2>
          <button className={styles.heroButton}>
            <Link className={styles.link} to="/sell">
              About Hazie
            </Link>
          </button>
        </div>
      </div>

      <h2 className={styles.explainTitle}>My Interests</h2>
      <div className={styles.explainBox}>
        <div>
          <h4>Travel & Adventure</h4>
          <img
            className={styles.explainImage}
            id={styles.explainImageOne}
            src={travelImg}
            alt="hitchhiking with backpack"
          ></img>
        </div>
        <div>
          <h4>Skills & Creativity</h4>
          <img
            className={styles.explainImage}
            id={styles.explainImageTwo}
            src={skillsImg}
            alt="self published book"
          ></img>
        </div>
        <div>
          <h4>Lifestyle</h4>
          <img
            className={styles.explainImage}
            id={styles.explainImageThree}
            src={lifestyleImg}
            alt="freedom life"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
