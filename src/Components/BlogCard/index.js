import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
//"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
function BlogCard({
  id,
  image,
  title,
  summary,
  subtitle,
  topics,
  textArr,
  imagesArr,
  handleArticleSelection,
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
          {/* <div onClick={() => handleArticleSelection(id)}>
            <Link to="/blogarticle">
              <button>Take a Look</button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
