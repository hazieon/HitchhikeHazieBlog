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
      <div className={styles.blogPageBox}>
        {blogPosts.map((post, index) => {
          return (
            <BlogCard
              image={post.thumbnail}
              title={post.title}
              summary={post.summary}
              topic={post.topics}
              subtitle={post.subtitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogPage;
