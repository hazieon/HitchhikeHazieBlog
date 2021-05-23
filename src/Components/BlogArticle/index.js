import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

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
    <div className={styles.container}>
      {articleData.title && (
        <div>
          <h1>UNDER CONSTRUCTION</h1>
          <h1>{articleData.title}</h1>
          <h2>{articleData.subtitle}</h2>
          <p>{articleData.date}</p>
          <img src={articleData.thumbnail} alt="blog" />

          <p>{articleData.content.textOne}</p>
          <img src={articleData.images.imageOne} alt="blog" />

          <p>{articleData.content.textTwo}</p>
          <img src={articleData.images.imageTwo} alt="blog" />
          <p>{articleData.content.textThree}</p>
          <img src={articleData.images.imageThree} alt="blog" />
          <button>Back to Blog</button>
        </div>
      )}
    </div>
  );
}

export default BlogArticle;
