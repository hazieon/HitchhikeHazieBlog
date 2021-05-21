import React from "react";
import styles from "./index.module.css";
import BlogCard from "../BlogCard";
import { blogPosts } from "../blogPosts";

// img,
// title,
// summary,
// subtitle,

function BlogPage() {
  return (
    <div className={styles.blogPageContainer}>
      <h1> PAGE UNDER CONSTRUCTION</h1>
      <div className={styles.blogPageBox}>
        {blogPosts.map((post, index) => {
          return (
            <div className={styles.blogPageCard}>
              <BlogCard
                image={post.thumbnail}
                title={post.title}
                summary={post.summary}
                topics={post.topics}
                subtitle={post.subtitle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogPage;
