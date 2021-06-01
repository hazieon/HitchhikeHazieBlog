import React from "react";
import styles from "./index.module.css";
import List from "../List";
import PageLink from "../pageLink";

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
          image={"https://i.ibb.co/4VkKMjm/IMGP6773.jpg"}
          listOne={[
            "Travel Life",
            "Hitchhiking",
            "Couchsurfing",
            "Off the beaten track",
            "Scenic Route",
            "Low budget travel",
          ]}
          listTwo={[
            "Vanlife",
            "Tiny House Living",
            "Sustainability",
            "Vegetarianism",
            "Yoga & Taekwondo",
            "Digital nomad",
          ]}
        />

        <div className={styles.textBox}>
          <h1>About</h1>
          <p>
            What is the motivation behind ‘travel life’? In summary, because
            life is short. I dream of touring the world more than climbing a
            corporate career ladder. To see the world with my own eyes while I
            have the energy to do so. To not only visit iconic tourist sites,
            but also smaller towns and go off the beaten track. I want to really
            broaden my horizons and develop a global perspective. Adapting to
            new cultures and seeing new scenery every day is an adventure.
          </p>
          <p>
            Another way to get that sense of adventure is from 'no plan' travel!
            Imagine: Packing a backpack with a sleeping bag and other
            necessities, and just setting out. I've camped in all sorts of
            places - Islands, mountains, beaches, forests - and faced all kinds
            of weather. Without a structured plan, unexpected things happen, and
            those unexpected things can be the most amazing. Sometimes there
            were tough days, but the memories are fun to look back on! What is
            the craziest place you ever camped?
          </p>
          <div className={styles.memoryImageBox}>
            <img
              className={styles.memoryImage}
              src={"https://i.ibb.co/Z2FBDVp/DSC-1297-2.jpg"}
              alt="first time travelling around Japan solo"
            />
          </div>
          <p>
            Hitchhiking is the deep end of 'no plan' travel. Flexible schedule?
            Flexible destination? Then hitchhiking is perfect! Many of my the
            travel experiences can start from hitchhiking - discovering hidden
            beauty spots, sightseeing tours from friendly drivers, and
            insightful conversations with people you might otherwise never speak
            to. For example, I encountered Japanese strawberry farmers, Korean
            fishermen, Tibetan monks, and everyday people from diverse
            backgrounds. Hitchhiking is challenging, but infinitely rewarding! I
            don’t recommend everyone should try it, but it can be a great way of
            exploring.
          </p>

          <p>
            Couchsurfing can provide much needed rest and sanctuary along the
            way. A roof, a bed, a shower - luxury! These things are often taken
            for Granted, but Couchsurfing is a blessing for those on the road.
            Not to mention, staying at the home of a local person can form
            unique connections and lifelong friendships. How great is it that
            you can visit a foreign country for the first time and being able to
            find open minded people to explore with.
          </p>

          <p>
            Take the scenic route. What does that mean? It’s about slow travel
            to connect more deeply with each destination. Like through learning
            the local language and spending time with people in the community.
            Of course, couchsurfing and hitchhiking really help with these
            goals!
          </p>
          <div className={styles.memoryImageBox}>
            <img
              className={styles.memoryImage}
              src={"https://i.ibb.co/JH8HZtZ/trio.jpg"}
              alt="hitchhiking to Nagoya"
            />
          </div>
          <p>
            Alternative Lifestyle - Vanlife and tiny house living. In the long
            term, I dream of travelling and/or living in a campervan. And One
            day, I am determined to create and live in my own tiny house.
            Imagine designing, building and living in a house that is customised
            to what you need. I’m excited to join the movement of low impact and
            sustainable housing which provides greater freedom, plus the ability
            to change locations freely.
          </p>
          <p>
            Sustainable diet - I haven't eaten meat for more than 10 years. A
            big motivation behind that now is climate change. I hope to see a
            future where the economy and society does not depend on intensive
            animal farming, using up a lot of land and resources. So I don’t
            want to contribute to the demand for the exploitation of animals and
            deforestation. Another factor is low-waste by avoiding plastic
            packaging as much as possible. I know that recycling is not as
            effective as the government would like us to believe. Someday, I’d
            like to be a part of a circular economy! Have you noticed any
            changes in the climate in your country?
          </p>
          <div className={styles.memoryImageBox}>
            <img
              className={styles.memoryImage}
              src={"https://i.ibb.co/bdvMhSH/DSC-0250.jpg"}
              alt="Forested island in Japan"
            />
          </div>
          <p>
            On a lighter note, staying active is another priority of mine! And
            whilst travelling, opportunities arise to get engaged with different
            sports and activities. In India, Yoga was a great way to stretch,
            exercise and relax for both physical and mental exercise. I really
            enjoyed the experience of yoga retreats!
          </p>
          <p>
            In Korea, I took the chance to practice Taekwondo 태권도. I totally
            immersed myself in the sport and trained every day. Taekwondo is
            great for stress release and building up fitness. Not to mention
            that joining sports clubs are a great way to meet people!
          </p>
          <div className={styles.memoryImageBox}>
            <img
              className={styles.memoryImage}
              src={"https://i.ibb.co/ZmLDj2d/taekwondo3.jpg"}
              alt="Black belt test in Korea"
            />
          </div>
          <p>
            Low budget life - I mention this last as, although it is a high
            priority, it still comes below hitchhiking, couchsurfing, camping,
            cycling, downsizing, living tiny, etc. Wherever I go solo
            travelling, I try to live on about £5 a day. I can walk and camp, or
            sometimes hitchhike or couchsurf when I need to. Lower expenses
            demand less need for income. More freedom.
          </p>
          <p>
            Summary - I try to look at life from a bird's eye perspective whilst
            aiming to prioritise things that are actually important to me and
            live a fulfilling life that I won't regret. Gaining skills and
            experience from the various paths I take along the way, I feel I am
            becoming a well rounded person with so many adventure tales to tell.
            These tales I hope to share here on this site, so if you would like
            to get some top tips for travelling on a low budget or read about
            experiences in different countries, just flick around this site!
            So...
          </p>
          <h2 className={styles.title}> Thanks for visiting!</h2>
          <PageLink
            link="/blogpage"
            text="Read adventure tales on the"
            pageName="BLOG"
          />
          <div className={styles.finalMemoryImageBox}>
            <img
              className={styles.memoryImage}
              src={"https://i.ibb.co/FnY03wp/IMGP7293.jpg"}
              alt="Finally seeing Sakura island!"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Lifestyle;
