import React, { useState } from "react";
import styles from "./index.module.css";
import image1 from "../../images/DSC_0187.JPG";
import image5 from "../../images/IMGP7293.JPG";
import image3 from "../../images/sapporo.jpg";
import image7 from "../../images/received_1047722578675891.jpeg";
import image2 from "../../images/Miyazaki day1_1079.jpg";
import image6 from "../../images/DSC_1481.JPG";
import image4 from "../../images/DSC_1267 2.jpg";
import image8 from "../../images/takao.jpg";

const photos = [image1, image2, image3, image4, image5, image6, image7, image8];

function MyGallery() {
  const [fullImage, setFullImage] = useState(null);

  function displayPhoto(index) {
    const selectedPhoto = photos[index];
    setFullImage(selectedPhoto);
    console.log(selectedPhoto);
  }

  function clearDisplayPhoto() {
    setFullImage(null);
  }

  return (
    <>
      <div className={styles.galleryBox}>
        {fullImage && (
          <div className={styles.fullSizeBox}>
            <span className={styles.fullSizeExit}>
              <button onClick={clearDisplayPhoto}>x</button>
            </span>
            <img
              src={fullImage}
              alt="selected travelpic full size"
              className={styles.fullSize}
            />
          </div>
        )}
        {photos.map((photo, index) => {
          return (
            <img
              src={photo}
              alt="gallery"
              className={styles.thumbnail}
              onClick={() => displayPhoto(index)}
            />
          );
        })}
      </div>
    </>
  );
}

export default MyGallery;
