import React, { useState } from "react";
import styles from "./index.module.css";
import Project from "../Project";
import Moongirl from "../../images/front cover thumb.png";
import DragonHearts from "../../images/Cover design layout THUMB.png";
import { Link } from "react-router-dom";
const projectsArray = [
  {
    image: Moongirl,
    alt: "The Lonely Moongirl cover",
    title: "The Lonely Moongirl",
    link: "https://www.instagram.com/the_lonelymoongirl/",
    text:
      "An illustrated poem picturebook. I drew the artworks digitally and wrote the poem whilst living in India.",
    textTwo: "",
    buttonText: "Find out more!",
    logo: "",
  },
  {
    image: DragonHearts,
    alt: "Dragon Hearts cover",
    title: "Dragon Hearts manga",
    link: "https://www.instagram.com/the_lonelymoongirl/",
    text:
      "A fantasy adventure comic set in Tokyo, Japan. I drew this one-shot manga whilst living in India, loosely based on my experiences in Japan.",
    textTwo: "",
    buttonText: "Take a look!",
    logo: "",
  },
];

function Creativity() {
  const [projects, setProjects] = useState(projectsArray);
  return (
    <div className={styles.projectsBox}>
      <div className={styles.heroImage}>
        <div className={styles.heroText}>
          {/*
          <h1>Creative Projects</h1>
          <h2>Take the scenic route.</h2>
          <Link className={styles.link} to="/about">
            <button className={styles.heroButton}>About Hazie</button>
          </Link> */}
        </div>
      </div>
      <div className={styles.titleBox}>
        <h1>Creative Projects </h1>
        <h4 className={styles.subheading}>
          Even when I'm on the move, I enjoy bringing ideas to life!
        </h4>
        <h4 className={styles.subheading}>
          Here are a few of my recent picturebooks, manga comics, photobooks or
          whatever else I've been working on.
        </h4>
      </div>
      {projects.map((project, index) => {
        return (
          <>
            <Project
              image={project.image}
              alt={project.alt}
              title={project.title}
              link={project.link}
              text={project.text}
              textTwo={project.textTwo}
              buttonText={project.buttonText}
              logo={project.logo}
            />
          </>
        );
      })}
    </div>
  );
}

export default Creativity;
