import React from "react";
import Slider from "infinite-react-carousel";
import styles from "./index.module.css";

function CustomSlider() {
  const settings = {
    autoplay: true,
    autoplayScroll: 1,
    autoplaySpeed: 5000,
    centerPadding: 30,
    dots: true,
    pauseOnHover: true,
    arrowsBlock: false,
  };
  return (
    <div className={styles.sliderBox}>
      <h2 className={styles.sliderTitle}>Gallery</h2>
      <Slider {...settings}>
        <div className={styles.sliderImage} id={styles.firstImage}></div>
        <div className={styles.sliderImage} id={styles.secondImage}></div>
        <div className={styles.sliderImage} id={styles.thirdImage}></div>
        <div className={styles.sliderImage} id={styles.fourthImage}></div>
        <div className={styles.sliderImage} id={styles.fifthImage}></div>
        <div className={styles.sliderImage} id={styles.sixthImage}></div>
        <div className={styles.sliderImage} id={styles.seventhImage}></div>
        <div className={styles.sliderImage} id={styles.eigthImage}></div>
        <div className={styles.sliderImage} id={styles.ninethImage}></div>
        <div className={styles.sliderImage} id={styles.tenthImage}></div>
      </Slider>
    </div>
  );
}

export default CustomSlider;
