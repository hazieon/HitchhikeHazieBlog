import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import MyTypist from "../Typist";
import YoutubeEmbed from "../Youtube";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.heroImage}>
        <div className={styles.heroText}>
          <h1>Thanks for Visiting</h1>
          <h2>Get in Touch!</h2>
          <Link className={styles.link} to="/about">
            <button className={styles.heroButton}>About Hazie</button>
          </Link>
        </div>
      </div>
      <div className={styles.contactBox}>
        <MyTypist
          textOne="Thank you for visiting my travel site!"
          textTwo="I'd love to hear your adventure stories too!"
          textThree="Feel free to reach out & get in touch"
          textFour="Hope to hear from you soon :)"
          countOne={50}
          countTwo={45}
          countThree={40}
          countFour={25}
        />
      </div>
      <YoutubeEmbed embedId="lFUbDr-JaJY" />

      <div className={styles.socialMediaBox}>
        <div className={styles.socialMediaItem}></div>
        <div className={styles.socialMediaItem}></div>
        <div className={styles.socialMediaItem}></div>
        <div className={styles.socialMediaItem}></div>
      </div>
    </div>
  );
}

export default Contact;
