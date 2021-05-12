import React from "react";
import styles from "./index.module.css";
import Panel from "../Panel";
import Text from "../Text";
import Comments from "../Comments";
// import moongirlProject from "../../images/moongirlgame.jpg";
// import hazieProject from "../../images/boseong.jpg";
// import purelyProject from "../../images/product image FROM INSTA.jpg";
// import polyhedraProject from "../../images/polyhedra.jpg";
// import nandokuProject from "../../images/nandoku.jpg";
// import vancationProject from "../../images/vancation.jpg";

const githubImage = "https://i.ibb.co/xhgh4TL/hazie-r3.png";
const githubLogo = "https://i.ibb.co/qpQ5gPJ/githublogo.png";

function CodeProjects() {
  return (
    <div className={styles.codeProjectsContainer}>
      <div className={styles.codeProjectsBox}>
        <h1>Recent Code Projects</h1>

        <Panel
          image={githubImage}
          alt="Github profile"
          title="Coding Projects"
          text="I'm always creating something new or updating projects. Full of ideas and constantly developing my skills to bring these to life."
          textTwo="See some of my recent projects on this page and try them out!"
          logo={githubLogo}
          link="https://github.com/hazieon"
          buttonText="See More on GitHub"
        />

        <Text
          image={"https://i.ibb.co/hMsccL8/vancation.jpg"}
          alt="Vancation App"
          subheading="🚛 Vancation"
          textOne="Vancation is an app for people travelling by campervan to pin good parking spots to a map! 🚛 "
          textTwo="React.js on the front end with Node.js on the backend. The PostgreSQL database is deployed on Heroku with CI/CD. For the map, I brought in the Google maps API!"
          logoOne={githubLogo}
          logoTwo={githubLogo}
          linkOne="https://github.com/hazieon/vancation"
          linkTwo="https://vancation.netlify.app"
          buttonOneText="View on GitHub"
          buttonTwoText="Try the Vancation site!"
        />
        <Text
          image={"https://i.ibb.co/CmTtY3v/nandoku.jpg"}
          alt="Nandoku App"
          subheading="難読漢字 Nandoku Kanji"
          textOne="Difficult Japanese kanji reading quiz challenge with various categories! 
          I like challenging myself and my friends with these unreadable characters, so decided to make an app for it!"
          textTwo="I used React.js for this project, with Auth0 for the secure login service. I am working on adding a Node.js backend to allow for storing users scores."
          logoOne={githubLogo}
          logoTwo={githubLogo}
          linkOne="https://github.com/hazieon/nandoku"
          linkTwo="https://nandoku.netlify.app/"
          buttonOneText="View on GitHub"
          buttonTwoText="Try the Nandoku quiz!"
        />
        <Panel
          image={"https://i.ibb.co/dpw4zHG/product-image-FROM-INSTA.jpg"}
          alt="Purely plantain"
          title="Plantain Chips eCommerce"
          text="WeLovePurely is a custom Shopify eCommerce site for flavoured plantain chips, created for a client!"
          textTwo="As a team, we were challenged to learn to use the platform and Liquid template language to create the desired layouts and features."
          logo=""
          link="https://welovepurely.com"
          buttonText="View the Site!"
        />
        <Text
          image={"https://i.ibb.co/85KVJ6s/polyhedra.jpg"}
          alt="Polyhedron Dice"
          subheading="Polyhedron Dice Machine"
          textOne="A mulitple dice roller tool for table top games. Roll anything from a d4 to a d120!"
          textTwo="Built completely in React. I created the site for my sister who loves D&D."
          logoOne={githubLogo}
          logoTwo={githubLogo}
          linkOne="https://github.com/hazieon/PolyhedronMachine"
          linkTwo="https://polyhedra-machine.netlify.app/"
          buttonOneText="View on GitHub"
          buttonTwoText="Try the Dice Roller!"
        />
        <Text
          image={"https://i.ibb.co/GMD1C1z/moongirlgame.jpg"}
          alt="Moongirl game"
          subheading="Moongirl Dressup Game"
          textOne="The Lonely Moongirl dressup game! Choose an outfit and hairstyle for the Moongirl, a character from a picturebook I enjoyed making."
          textTwo="The site is vanilla JavaScript! I created the images in digital art software. I was excited to bring my storybook to life a little more!"
          logoOne={githubLogo}
          logoTwo={githubLogo}
          linkOne="https://github.com/hazieon/dressupgame"
          linkTwo="https://moongirl-dressup.netlify.app/"
          buttonOneText="View on GitHub"
          buttonTwoText="Dress up Moongirl!"
        />

        <Panel
          image={"https://i.ibb.co/vhqx7nd/boseong.jpg"}
          alt="Hitchhike Hazie"
          title="This website: Hitchhike Hazie!"
          text="My travel lifestyle creativity hub! I hope to build up this site to be a visual record of my journey to share with others and network with more people!"
          textTwo="Several years ago, I made a WordPress site, but had bigger ideas for my site. So I created this site from scratch using React, with a bit of material UI. All the photos and artworks are my own :) Thanks for stopping by!"
          logo={githubLogo}
          link="https://github.com/hazieon/HitchhikeHazieBlog"
          buttonText="View on GitHub!"
        />
        {/* 
        <Comments /> */}
      </div>
    </div>
  );
}

export default CodeProjects;
