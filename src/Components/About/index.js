import React from "react";
import styles from "./index.module.css";
import Panel from "../Panel";
import githubImage from "../../images/hazie r3.png";
import githubLogo from "../../images/githublogo.png";
import hazieImage from "../../images/DSC_0817 4.jpg";
import moongirlImage from "../../images/moongirl.jpg";
import hazieImageTwo from "../../images/19366298_10155263329136070_3045937438815596369_n.jpg";
import Text from "../Text";

function About() {
  return (
    <>
      <div className={styles.About}>
        <Panel
          image={hazieImage}
          alt="Hazie the vampire"
          title="Hey, I'm Hazie!"
          text={
            "Since studying abroad in Japan, I haven't stopped exploring! I lived in Japan, South Korea, Austria & India. I also spent some months hitchhiking around Europe."
          }
          textTwo="In my free time, I like creating picturebooks, photobooks and recently I am learning to code! Check out my projects and more around this site. Thanks so much for visiting! :)"
          logo={githubLogo}
          link="https://github.com/hazieon"
          buttonText="See More on GitHub"
        />

        <Text
          image={hazieImageTwo}
          alt="it's me"
          subheading="Background"
          textOne="I studied Psychology at university and spent one year studying abroad in Japan. This exchange year awakened my calling to adventure, so since graduating I have been living and exploring different countries. I travel on a very low budget and enjoy most meeting new people and learning the local language. I can speak Japanese, Korean and I'm learning traditional Chinese!"
          textTwo="Everyday can be an adventure! This is why I love hitchhiking and couchsurfing. I've also spent time volunteering, as an au pair, and teaching English to children and adults. I'm dreaming of vanlife and building a tiny house! "
        />

        <Text
          image={moongirlImage}
          alt="Creative projects"
          subheading="Creativity & Projects"
          textOne=" I have endless imagination and have created picturebooks, photobooks and a manga comic in my free time whilst traveling. More works are in the making! "
          textTwo="Feel free to check out my projects The Lonely Moongirl and Dragon Hearts."
          linkOne="https://www.instagram.com/the_lonelymoongirl/"
          linkTwo="https://www.instagram.com/the_lonelymoongirl/"
          buttonOneText="Moongirl"
          buttonTwoText="Dragon Hearts"
          logoOne={githubLogo}
          logoTwo={githubLogo}
        />

        <Text
          image={githubImage}
          alt="Coding section"
          subheading="Coding Skills"
          textOne="During the recent pandemic, whilst static, I took the opportunity to learn to code. Currently I am comfortable with JavaScript, React.js, Node.js, HTML5, CSS6, SQL and always learning more."
          textTwo="I jumped into the world of tech which allows me to bring my creativity, logic and wild lifestyle all together! My projects are viewable on GitHub, but here are a few highlights:"
          linkOne="https://nandoku.netlify.app"
          linkTwo="https://vancation.netlify.app"
          buttonOneText="Nandoku Kanji"
          buttonTwoText="Vancation"
          logoOne={githubLogo}
          logoTwo={githubLogo}
        />
      </div>
    </>
  );
}

export default About;

// I studied Psychology at university and spent one year studying abroad in Japan. This exchange year awakened my calling to adventure, so since graduating I have been living and exploring different countries. I travel on a very low budget and enjoy most meeting new people and learning the local language.

//           Everyday can be an adventure! I love hitchhiking and couchsurfing. I've also spent time volunteering, as an au pair, and teaching English to children and adults.

//           I have endless imagination and have created picturebooks, photobooks and a manga comic in my free time whilst traveling. More works are in the making! Feel free to check out my projects The Lonely Moongirl and Dragon Hearts.

//           During the recent pandemic, whilst static, I took the opportunity to learn to code. I jumped into the world of tech which allows me to bring my creativity, logic and wild lifestyle all together! My projects are viewable on GitHub, but here are a few highlights:
