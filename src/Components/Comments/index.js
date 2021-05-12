import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const commentsSample = [
  { user: "Friend", comment: "Hello! I like hitchhiking too" },
  { user: "FriendTwo", comment: "Wow, let's go to Iceland together" },
  { user: "FriendThree", comment: "lolololol" },
];

function Comments() {
  const [commentsArr, setCommentsArr] = useState([]);

  function fetchComments() {
    setCommentsArr(commentsSample);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className={styles.commentsContainer}>
      <div className={styles.comments}>
        {commentsArr.map((comment) => {
          return (
            <div className={styles.commentsBox}>
              <h3>{comment.user ? comment.user : ""}</h3>
              <p>{comment.comment ? comment.comment : ""}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
