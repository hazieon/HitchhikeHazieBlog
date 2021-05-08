import React from "react";
import styles from "./index.module.css";
import List from "../List";
import lifestyleImage from "../../images/IMGP6773.JPG";

import image1 from "../../images/DSC_1297 2.jpg";
import image2 from "../../images/trio.jpg";
import image3 from "../../images/DSC_0250.JPG";
import image4 from "../../images/taekwondo3.jpg";
import image5 from "../../images/IMGP7293.JPG";

import { Link } from "react-router-dom";
function Lifestyle() {
  return (
    <>
      <div className={styles.lifestyleBox}>
        <div className={styles.heroImage}>
          <div className={styles.heroText}>
            <h1>Alternative Lifestyle</h1>
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
            "Digital nomad",
          ]}
        />

        <div className={styles.textBox}>
          <h1>About</h1>
          <p>
            Why - Life is short. It doesn't make sense to me to spend my time
            focusing on a 9-5 job. Especially in my younger years, I dream of
            exploring the world. Not only iconic tourist sites, but also smaller
            towns off the beaten track. To really broaden my horizons and
            develop a global perspective. Adapting to new cultures and seeing
            new scenery every day is an adventure.
          </p>
          <p>
            Adventure is... 'no plan' travel! Pack my backpack with my sleeping
            bag and other necessities, and set out. I've camped in all sorts of
            places and faced all kinds of weather. Islands, mountains, beaches,
            forests.
          </p>
          <div className={styles.memoryImageBox}>
            <img
              className={styles.memoryImage}
              src={image1}
              alt="first time in Japan"
            />
          </div>
          <p>
            Couchsurfing provides much needed rest and sanctuary along the way.
            A roof, a bed, a shower - luxury! These things are taken for
            granted. Couchsurfing is a blessing for those on the road. Staying
            at the home of a local person can build unique connections and
            lifelong friendships.
          </p>

          <p>
            Hitchhiking is the deep end of 'no plan' travel. Flexible schedule?
            Flexible destination? Then hitchhiking is perfect! Many of my best
            travel experiences started from hitchhiking - discovering
            undocumented beauty spots, sightseeing tours from friendly drivers,
            and insightful conversations with people I might otherwise never
            speak to. For example, Japanese strawberry farmers, Korean
            fishermen, Tibetan monks, and everyday people from diverse
            backgrounds! Hitchhiking inspires me to travel more! It is
            challenging and rewarding!
          </p>

          <p>
            Deeper travel - Travel, but slow travel. I aim to connect with the
            countries and towns I visit, learning the local language and
            spending time with people in the community. Of course, couchsurfing
            and hitchhiking really help with these goals!
          </p>
          <div className={styles.memoryImageBox}>
            <img
              className={styles.memoryImage}
              src={image2}
              alt="first time in Japan"
            />
          </div>
          <p>
            Sustainable Lifestyle - Vanlife and tiny house living . In the long
            term, I dream of travelling and living in a campervan. Vanlife! And
            beyond that I am determined to create and live in my own tiny house
            - a low impact and sustainable housing plan. This provides greater
            financial freedom and literal freedom to change locations.
          </p>
          <p>
            Vegetarian - I haven't eaten meat for more than 10 years. A big
            motivation behind that now is climate change. The core of the
            problem is NOT being dealt with, and the responsibility of changing
            our modern lifestyles shouldn't be thrown on individuals while
            governments and big companies still throw money at fossil fuels and
            farming that involves deforestation. But social change needs to come
            first. I don't want to contribute to the demand for these disastrous
            industries. As much as possible, I want to reduce my footprint.
          </p>
          <div className={styles.memoryImageBox}>
            <img
              className={styles.memoryImage}
              src={image3}
              alt="first time in Japan"
            />
          </div>
          <p>
            Yoga - Whilst living in India, I enjoyed practising yoga routines
            and poses. A great way to stretch, exercise and relax.
            Unfortunately, the pandemic hit just when I was planning to complete
            my yoga teacher training course in Mumbai. Yoga is a great
            combination of physical and mental exercise.
          </p>
          <p>
            Taekwondo - Another sport activity I enjoy is the Korean martial
            art, taekwondo 태권도. I practised for 2 hours every day during my
            time in Korea, totally immersing myself into the sport in my free
            time. Martial arts are another example of an activity combining
            physical and mental strength.
          </p>
          <div className={styles.memoryImageBox}>
            <img
              className={styles.memoryImage}
              src={image4}
              alt="first time in Japan"
            />
          </div>
          <p>
            Low budget life - I mention this last as, although it is a high
            priority, it still comes below all the other awesome perks of
            hitchhiking, couchsurfing, camping, cycling, downsizing, living
            tiny, reducing waste. Lower expenses demands less need for income.
            Less stress for constant work. Freedom. So wherever I go, I try to
            live on ~£5 a day. I can walk and camp, or even hitchhike or
            couchsurf if I need to.
          </p>
          <p>
            Summary - I try to look at life from a bird's eye perspective. To
            prioritise things that are actually important to me and live a
            fulfilling life that I won't regret. Gaining skills and experience
            from the various paths I take along the way, I feel I am becoming a
            well rounded person with a load of adventure tales to tell. These
            tales I am trying my best to document and share on this site, so
            you'd like to uncover some of my stories, just flick around this
            site! So...
          </p>
          <h2 className={styles.title}> Thanks for visiting!</h2>
          <div className={styles.memoryImageBox}>
            <img
              className={styles.memoryImage}
              src={image5}
              alt="first time in Japan"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Lifestyle;
