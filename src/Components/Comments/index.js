import React from "react";
import styles from "./index.module.css";
var dateFormat = require("dateformat");
var now = new Date();

// const commentsSample = [
//   { user: "Friend", comment: "Hello! I like hitchhiking too" },
//   { user: "FriendTwo", comment: "Wow, let's go to Iceland together" },
//   { user: "FriendThree", comment: "lolololol" },
// ];

function Comments({ comments, postNewComment, removeComment }) {
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
              <p
                className={styles.delete}
                onClick={() => {
                  alert(
                    `deleting comment from ${comment.name}. Please refresh`
                  );
                  removeComment(comment.uuid);
                }}
              >
                x
              </p>
              <div className={styles.commentsDetails}>
                <h3 className={styles.commentsName}>
                  From: {comment.name ? comment.name : ""}
                  {comment.date
                    ? " on " + dateFormat(comment.date, "d mmmm, yyyy")
                    : "recently"}
                </h3>
                <h3 className={styles.commentsCountry}>
                  Country: {comment.country ? comment.country : ""}
                </h3>
              </div>
              <p className={styles.label}>Message:</p>
              <p> {comment.comment ? comment.comment : ""}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
dateFormat("Jun 9 2007", "fullDate");

export default Comments;
