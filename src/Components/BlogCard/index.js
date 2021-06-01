import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { UseBlogContext } from "../blogContext";

function BlogCard({
  id,
  image,
  title,
  summary,
  topics,
  textArr,
  imagesArr,
  handleArticleSelection,
}) {
  const [articleId, AddArticleId] = UseBlogContext();

  return (
    <div className={styles.box}>
      <div className={styles.card}>
        <div className={styles.imageBox}>
          <img className={styles.image} src={image} alt="" />
        </div>
        <div className={styles.contentsBox}>
          <h2 className={styles.title}>{title}</h2>

          <p>Topics: {topics[0] + ", " + topics[1]}</p>
          <h5 className={styles.summary}>{summary}</h5>
          <div>
            <Link to="/blogarticle">
              <button id={styles.pageButton} onClick={() => AddArticleId(id)}>
                Take a Look!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
