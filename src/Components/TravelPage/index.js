import React from "react";
import styles from "./index.module.css";
import MyGallery from "../Gallery";
import studyAbroad from "../../images/DSC_0410.JPG";
// import { japanPhotosArray } from "../../japanPhotos";

import image1 from "../../images/DSC_0187.JPG";
import image5 from "../../images/IMGP7293.JPG";
import image3 from "../../images/sapporo.jpg";
import image7 from "../../images/received_1047722578675891.jpeg";
import image2 from "../../images/Miyazaki day1_1079.jpg";
import image6 from "../../images/DSC_1481.JPG";
import image4 from "../../images/DSC_1267 2.jpg";
import image8 from "../../images/takao.jpg";

const japanPhotosArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

function TravelPage() {
  return (
    <>
      <div className={styles.travelBox}>
        <div className={styles.heroImage}>
          <div className={styles.heroText}>
            {/* <h1>Travel & </h1>
            <h1>Adventure</h1> */}
          </div>
        </div>
        <div className={styles.titleBox}>
          <h1>Travel & Adventure</h1>
          <h3>Here is the story of my travels:</h3>
        </div>
        <h2 className={styles.subheading}>Study abroad in Japan</h2>
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
        <h2 className={styles.subheading}>Japan year Memories:</h2>
        <MyGallery photosArray={japanPhotosArray} />

        <h2 className={styles.subheading}>Hitchhike trip in Europe</h2>
        <h4 className={styles.subheading}>
          We spent 2 months exploring 10 countries in Europe -
        </h4>
        <div className={styles.memoryImageBox}>
          <img
            className={styles.memoryImage}
            src={studyAbroad}
            alt="exploring Europe"
          />
        </div>
        <h2 className={styles.subheading}>Moments from the Euro trip:</h2>
        <MyGallery photosArray={japanPhotosArray} />
      </div>
    </>
  );
}

export default TravelPage;

/* <h2>Take the scenic route.</h2> */
/* <Link className={styles.link} to="/about">
            <button className={styles.heroButton}>About Hazie</button>
          </Link> */
