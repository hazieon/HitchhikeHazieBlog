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

      {/* <div className={styles.socialMediaBox}>
        <div className={styles.socialMediaItem} id={styles.itemOne}></div>
        <div className={styles.socialMediaItem} id={styles.itemTwo}></div>
        <div className={styles.socialMediaItem} id={styles.itemThree}></div>
        <div className={styles.socialMediaItem} id={styles.itemFour}></div>
      </div> */}

      <div className={styles.explainSection}>
        <h1 className={styles.explainTitle}>Contact Info</h1>
        <div className={styles.explainBox}>
          <div>
            <h2>Instagram</h2>
            <a href="https://www.instagram.com/hitchhikehazie/">
              <div
                className={styles.sliderImage}
                id={styles.explainImageOne}
              ></div>
            </a>
          </div>
          <div>
            <h2>YouTube</h2>
            <a href="https://www.youtube.com/channel/UCu-6BiXjdeVrP6unPB-VVyQ">
              <div
                className={styles.sliderImage}
                id={styles.explainImageTwo}
              ></div>
            </a>
          </div>
          <div>
            <h2>LinkedIn</h2>
            <a href="https://www.linkedin.com/in/haziea/">
              <div
                className={styles.sliderImage}
                id={styles.explainImageThree}
              ></div>
            </a>
          </div>
          <div>
            <h2>GitHub</h2>
            <a href="https://github.com/hazieon">
              <div
                className={styles.sliderImage}
                id={styles.explainImageFour}
              ></div>
            </a>
          </div>
        </div>
      </div>

      <YoutubeEmbed embedId="lFUbDr-JaJY" />
    </div>
  );
}

export default Contact;
