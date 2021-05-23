import React, { useState } from "react";
import styles from "./index.module.css";
import BlogCard from "../BlogCard";
import { blogPosts } from "../blogPosts";

// img,
// title,
// summary,
// subtitle,

function BlogPage({ handleArticleSelection }) {
  const [selectedBlog, setSelectedBlog] = useState(0);
  return (
    <div className={styles.blogPageContainer}>
      <h1>PAGE UNDER CONSTRUCTION </h1>
      <h1> Adventure Tales {selectedBlog}</h1>
      <div className={styles.blogPageBox}>
        {blogPosts.map((post, index) => {
          return (
            <div
              className={styles.blogPageCard}
              onClick={() => {
                setSelectedBlog(post.id);
                // handleArticleSelection(post.id);
              }}
            >
              <BlogCard
                id={post.id}
                image={post.data.thumbnail}
                title={post.data.title}
                summary={post.data.summary}
                topics={post.data.topics}
                subtitle={post.data.subtitle}
                handleArticleSelection={handleArticleSelection}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogPage;
