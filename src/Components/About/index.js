import React from "react";
import styles from "./index.module.css";
import Panel from "../Panel";
import PageLink from "../pageLink";
import Text from "../Text";
import Slider from "../Slider";

function About() {
  return (
    <>
      <div className={styles.About}>
        <Panel
          image={"https://i.ibb.co/kc9CFSC/DSC-0817-4.jpg"}
          alt="Hazie the vampire"
          title="Hey, I'm Hazie!"
          text={
            "Since studying abroad in Japan, I haven't stopped exploring! I lived in Japan, South Korea, Austria & India as well as some months hitchhiking around Europe."
          }
          textTwo="In my free time, I like creating picturebooks, photobooks and recently I am learning to code! Check out my projects and more around this site. Thanks so much for visiting! :)"
          logo={"https://i.ibb.co/qpQ5gPJ/githublogo.png"}
          link="https://github.com/hazieon"
          buttonText="See More on GitHub"
          linkTwologoTwo="https://hitchhikehazie.netlify.app/codeprojects"
          buttonTwoText="View Code Projects Page"
        />

        <Text
          image={
            "https://i.ibb.co/kHFPjXQ/19366298-10155263329136070-3045937438815596369-n.jpg"
          }
          alt="it's me"
          subheading="Background 🌎"
          textOne="I studied Psychology at university and spent one year studying abroad in Japan. This exchange year awakened my calling to adventure, so since graduating I have been living and exploring different countries. I travel on a very low budget and most enjoy meeting new people and learning new languages. Currently, I can speak Japanese, Korean and I'm learning traditional Chinese."
          textTwo="Everyday can be an adventure! This is why I love hitchhiking and couchsurfing. I've also spent time volunteering, as an au pair, and teaching English to children and adults. I'm dreaming of vanlife and building a tiny house! "
        />

        <Text
          image={"https://i.ibb.co/KVBY0nB/moongirl.jpg"}
          alt="Creative projects"
          subheading="Creativity & Projects 🎨"
          textOne=" I have endless imagination and have created picturebooks, photobooks and a manga comic in my free time whilst traveling. More works are in the making! "
          textTwo="Feel free to check out my projects The Lonely Moongirl and Dragon Hearts."
          linkOne="https://hitchhikehazie.netlify.app/moongirl"
          linkTwo="https://hitchhikehazie.netlify.app/dragon"
          buttonOneText="Moongirl"
          buttonTwoText="Dragon Hearts"
          logoOne={"https://i.ibb.co/qpQ5gPJ/githublogo.png"}
          logoTwo={"https://i.ibb.co/qpQ5gPJ/githublogo.png"}
        />

        <Text
          image={"https://i.ibb.co/xhgh4TL/hazie-r3.png"}
          alt="Coding section"
          subheading="Coding Skills 💻"
          textOne="During the recent pandemic, whilst static, I took the opportunity to learn to code. Currently I am comfortable with JavaScript, React.js, Node.js, HTML5, CSS6, SQL and always learning more."
          textTwo="I jumped into the world of tech which allows me to bring my creativity, logic and wild lifestyle all together! My projects are viewable on GitHub, but here are a few highlights:"
          linkOne="https://nandoku.netlify.app"
          linkTwo="https://vancation.netlify.app"
          buttonOneText="Nandoku Kanji"
          buttonTwoText="Vancation"
          logoOne={"https://i.ibb.co/qpQ5gPJ/githublogo.png"}
          logoTwo={"https://i.ibb.co/qpQ5gPJ/githublogo.png"}
        />
      </div>
      <PageLink
        link="/blogpage"
        text="Read adventure tales on the"
        pageName="BLOG"
      />
      <Slider />
    </>
  );
}

export default About;
