import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { UseBlogContext } from "../blogContext";
import { blogPosts } from "../blogPosts";

function BlogArticle() {
  const [articleId, AddArticleId] = UseBlogContext();
  const [articleData, setArticleData] = useState({});
  console.log(articleData);
  useEffect(() => {
    // setArticle(blogPosts.find((blog) => blog.id === articleId).data);
    // console.log(article, "article");
    if (articleId != null && articleId >= 0) {
      const blogIndex = blogPosts.findIndex((blog) => blog.id === articleId);
      setArticleData(blogPosts[blogIndex].data);
    } else {
      const blogIndex = blogPosts.findIndex((blog) => blog.id === 1);
      setArticleData(blogPosts[blogIndex].data);
    }
  }, [articleId]);

  return (
    <>
      <div className={styles.redirectButtonBox}>
        <Link to="/blogpage">
          <button className={styles.redirectButton} id={styles.pageButton}>
            ← Back to Blog
          </button>
        </Link>
      </div>
      <h1>UNDER CONSTRUCTION</h1>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          {articleData.title && (
            <div>
              <h1 className={styles.title}>{articleData.title}</h1>
              <h3 className={styles.subtitle}>{articleData.subtitle}</h3>
              <p className={styles.date}>Posted: {articleData.date}</p>
              <img
                className={styles.thumbnail}
                src={articleData.thumbnail}
                alt="blog"
              />

              <p className={styles.blogBody} id={styles.textOne}>
                {articleData.content.textOne}
              </p>
              <img
                className={styles.blogImage}
                id={styles.imageOne}
                src={articleData.images.imageOne}
                alt="blog"
              />

              <p className={styles.blogBody} id={styles.textTwo}>
                {articleData.content.textTwo}
              </p>
              <img
                className={styles.blogImage}
                id={styles.imageTwo}
                src={articleData.images.imageTwo}
                alt="blog"
              />
              <p className={styles.blogBody} id={styles.textThree}>
                {articleData.content.textThree}
              </p>
              <img
                className={styles.blogImage}
                id={styles.imageThree}
                src={articleData.images.imageThree}
                alt="blog"
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <Link to="/blogpage">
          <button className={styles.backButton} id={styles.pageButton}>
            ← Back to Blog
          </button>
        </Link>
      </div>
    </>
  );
}

export default BlogArticle;
