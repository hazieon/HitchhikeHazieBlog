import React from "react";
import styles from "./index.module.css";
import MyGallery from "../Gallery";
import Text from "../Text";
import studyAbroad from "../../images/DSC_0410.JPG";
import europeTrip from "../../images/DSC_1006.JPG";
import koreaYear from "../../images/DSC_0291 2.jpg";
import indiaTrip from "../../images/DSC_0611.JPG";
import austria from "../../images/DSC_0897_24808 2.JPG";
import vanlife from "../../images/DSC_0666 2.jpg";
import revistJapan from "../../images/CSC_0133.JPG";
import { japanPhotosArray } from "../../japanPhotos";
import { europePhotosArray } from "../../europePhotos";
import { koreaPhotosArray } from "../../koreaPhotos";
import { indiaPhotosArray } from "../../indiaPhotos";
import { vanlifePhotosArray } from "../../vanlifePhotos";
import { japanRevisitPhotosArray } from "../../japanRevisitPhotos";

function TravelPage() {
  return (
    <>
      <div className={styles.travelBox}>
        <div className={styles.heroImage}>
          <div className={styles.heroText}>
            <h1>Travel & </h1>
            <h1>Adventure</h1>
          </div>
        </div>
        <div className={styles.titleBox}>
          <h1>Travel Timeline</h1>
          {/* <h3>Here is the story of my travels:</h3> */}
        </div>
        <h1 className={styles.subheading}>Study abroad in Japan</h1>
        <h4 className={styles.subheading}>
          One year in Tokyo & hitchhiking Japan opened my eyes to the 'travel
          life'
        </h4>
        <div className={styles.memoryImageBox}>
          <img
            className={styles.memoryImage}
            src={studyAbroad}
            alt="first time in Japan"
          />
        </div>
        <h2 className={styles.subheading}>Memories from Japan -</h2>
        <MyGallery photosArray={japanPhotosArray} />

        <h1 className={styles.subheading}>Hitchhike trip in Europe</h1>
        <h4 className={styles.subheading}>
          We spent 2 months exploring 10 countries in Europe!
        </h4>
        <div className={styles.memoryImageBox}>
          <img
            className={styles.memoryImage}
            src={europeTrip}
            alt="exploring Europe"
          />
        </div>
        <h2 className={styles.subheading}>Moments from the Euro trip -</h2>
        <MyGallery photosArray={europePhotosArray} />
      </div>

      <Text
        image={austria}
        alt="mountains with snow"
        subheading="Au pair in Austria"
        textOne="After exploring Europe, I stayed 2 more months in Austria with a family teaching English to their children."
        textTwo="I really appreciate the mountains and nature in Austria."
      />

      <h1 className={styles.subheading}>Working in South Korea</h1>
      <h4 className={styles.subheading}>
        I taught English for one year in Seoul and learnt Taekwondo!
      </h4>
      <div className={styles.memoryImageBox}>
        <img
          className={styles.memoryImage}
          src={koreaYear}
          alt="living in Korea"
        />
      </div>
      <h2 className={styles.subheading}>Memories from Korea -</h2>
      <MyGallery photosArray={koreaPhotosArray} />

      <h1 className={styles.subheading}>Revisiting Japan!</h1>
      <h4 className={styles.subheading}>
        I finally got the chance to revist my friends and travel new areas of
        Japan- more hitchhiking!
      </h4>
      <div className={styles.memoryImageBox}>
        <img
          className={styles.memoryImage}
          src={revistJapan}
          alt="Japan fox mask"
        />
      </div>
      <h2 className={styles.subheading}>Return to Japan -</h2>
      <MyGallery photosArray={japanRevisitPhotosArray} />

      <h1 className={styles.subheading}>Life in India</h1>
      <h4 className={styles.subheading}>
        For 6 months I lived in India where I taught English & practised yoga.
      </h4>
      <div className={styles.memoryImageBox}>
        <img
          className={styles.memoryImage}
          src={indiaTrip}
          alt="living in India"
        />
      </div>
      <h2 className={styles.subheading}>India snapshots -</h2>
      <MyGallery photosArray={indiaPhotosArray} />

      <h1 className={styles.subheading}>Vanlife in Cotswolds & Schwarzwald</h1>
      <h4 className={styles.subheading}>
        The pandemic restricted a lot of things, but we managed a few trips when
        regulations were eased.
      </h4>
      <div className={styles.memoryImageBox}>
        <img
          className={styles.memoryImage}
          src={vanlife}
          alt="vanlife in Europe & UK"
        />
      </div>
      <h2 className={styles.subheading}>Campervan trip pictures -</h2>
      <MyGallery photosArray={vanlifePhotosArray} />
    </>
  );
}

export default TravelPage;

/* <h2>Take the scenic route.</h2> */
/* <Link className={styles.link} to="/about">
            <button className={styles.heroButton}>About Hazie</button>
          </Link> */
