import React from "react";
import styles from "./index.module.css";

// const commentsSample = [
//   { user: "Friend", comment: "Hello! I like hitchhiking too" },
//   { user: "FriendTwo", comment: "Wow, let's go to Iceland together" },
//   { user: "FriendThree", comment: "lolololol" },
// ];

function Comments({ comments }) {
  // const [commentsArr, setCommentsArr] = useState([]);

  // function fetchComments() {
  //   setCommentsArr(commentsSample);
  // }

  // useEffect(() => {
  //   fetchComments();
  // }, []);

  return (
    <div className={styles.commentsContainer}>
      <h1>Message Board</h1>
      <div className={styles.comments}>
        {comments.map((comment) => {
          return (
            <div className={styles.commentsBox}>
              <div className={styles.commentsDetails}>
                <h3>Comment by: {comment.name ? comment.name : ""}</h3>
                <h3>Country: {comment.country ? comment.country : ""}</h3>
              </div>
              <p>{comment.comment ? comment.comment : ""}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
