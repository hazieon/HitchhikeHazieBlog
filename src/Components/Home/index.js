import styles from "./index.module.css";
import { Link } from "react-router-dom";
import Panel from "../Panel";
import githubImage from "../../images/hazie r3.png";
import githubLogo from "../../images/githublogo.png";

// import travelImg from "../../images/boseong.jfif";
// import skillsImg from "../../images/moongirl.jpg";
// import lifestyleImg from "../../images/received_2396607630564628.jpeg";

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

      <div className={styles.explainSection}>
        <h1 className={styles.explainTitle}>My Interests</h1>
        <div className={styles.explainBox}>
          <div>
            <h3>Travel & Adventure</h3>
            <div
              className={styles.sliderImage}
              id={styles.explainImageOne}
            ></div>
          </div>
          <div>
            <h3>Skills & Creativity</h3>
            <div
              className={styles.sliderImage}
              id={styles.explainImageTwo}
            ></div>
          </div>
          <div>
            <h3>Lifestyle</h3>
            <div
              className={styles.sliderImage}
              id={styles.explainImageThree}
            ></div>
          </div>
        </div>
      </div>

      <Panel
        image={githubImage}
        alt="Github profile"
        title="Coding Projects"
        text="I'm always creating something new or updating projects. Full of ideas and constantly developing my skills to bring these to life."
        logo={githubLogo}
        link="https://github.com/hazieon"
        buttonText="See More on GitHub"
      />
    </div>
  );
}

export default Homepage;

/* <img
            className={styles.explainImage}
            id={styles.explainImageOne}
            src={travelImg}
            alt="hitchhiking with backpack"
          ></img> */
