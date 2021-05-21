import React from "react";
import styles from "./index.module.css";
//"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
function BlogCard({
  image,
  title,
  summary,
  subtitle,
  topics,
  textArr,
  imagesArr,
}) {
  return (
    <div className={styles.box}>
      <div className={styles.card}>
        <div className={styles.imageBox}>
          <img className={styles.image} src={image} alt="" />
        </div>
        <div className={styles.contentsBox}>
          <h2 className={styles.title}>{title}</h2>
          {/* <h3>{subtitle}hi</h3> */}
          <p>{topics[0] + ", " + topics[1]}</p>
          <h5>{summary}</h5>
          <button>Click</button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
