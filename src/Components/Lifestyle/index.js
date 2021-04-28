import React from "react";
import styles from "./index.module.css";
import List from "../List";
import lifestyleImage from "../../images/IMGP6773.JPG";
import { Link } from "react-router-dom";
function Lifestyle() {
  return (
    <>
      <div className={styles.lifestyleBox}>
        <div className={styles.heroImage}>
          <div className={styles.heroText}>
            <h1>Alternative Lifestyle</h1>
            {/* 
            <h2>Take the scenic route.</h2>
            <Link className={styles.link} to="/about">
              <button className={styles.heroButton}>About Hazie</button>
            </Link> */}
          </div>
        </div>
        <List
          image={lifestyleImage}
          listOne={[
            "Alternative travel",
            "Hitchhiking",
            "Couchsurfing",
            "Off the beaten track",
            "Abandoned buildings",
            "Low budget travel",
          ]}
          listTwo={[
            "Vanlife",
            "Tiny house living",
            "Sustainability",
            "Vegetarian",
            "Yoga & taekwondo",
          ]}
        />

        <div className={styles.textBox}>
          <h1>About</h1>
          <p>
            Life is short. It doesn't make sense to me to spend my time focusing
            on a 9-5 job. Especially in my younger years, I dream of exploring
            the world. Not only iconic tourist sites, but also smaller towns off
            the beaten track. To really broaden my horizons and develop a global
            perspective. Adapting to new cultures and seeing new scenery every
            day is an adventure.
          </p>
          <p>
            Travel, but slow travel. I aim to connect with the countries and
            towns I visit, learning the local language and spending time with
            people in the community. Of course, couchsurfing and hitchhiking
            really help with these goals!
          </p>
          <p>
            In the long term, I dream of travelling and living in a campervan.
            Vanlife! And beyond that I am determined to create and live in my
            own tiny house - a low impact and sustainable housing plan. Not only
            does it provide greater financial freedom and literal freedom to
            change locations, but also freedom from conventional ...
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Lifestyle;
