import styles from "./index.module.css";
import { Link } from "react-router-dom";
import Panel from "../Panel";
import MyTypist from "../Typist";
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
          <Link className={styles.link} to="/about">
            <button className={styles.heroButton}>About Hazie</button>
          </Link>
        </div>
      </div>
      <MyTypist text="Welcome" />
      <div className={styles.explainSection}>
        <h1 className={styles.explainTitle}>Interests</h1>
        <div className={styles.explainBox}>
          <div>
            <h3>Travel & Adventure</h3>
            <Link to="/travel">
              <div
                className={styles.sliderImage}
                id={styles.explainImageOne}
              ></div>
            </Link>
          </div>
          <div>
            <h3>Skills & Creativity</h3>
            <Link to="/creativity">
              <div
                className={styles.sliderImage}
                id={styles.explainImageTwo}
              ></div>
            </Link>
          </div>
          <div>
            <h3>Lifestyle</h3>
            <Link to="/lifestyle">
              <div
                className={styles.sliderImage}
                id={styles.explainImageThree}
              ></div>
            </Link>
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
