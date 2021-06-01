import React from "react";
// import NewComment from "../NewComment";
import Form from "../PostComment";
import styles from "./index.module.css";
var dateFormat = require("dateformat");
var now = new Date();

function Comments({ comments, postNewComment, removeComment }) {
  return (
    <div className={styles.commentsContainer}>
      <Form postNewComment={postNewComment} />
      <h1>Message Board</h1>
      <div className={styles.comments}>
        {comments.map((comment) => {
          return (
            <div className={styles.commentsBox}>
              {/* <p
                className={styles.delete}
                onClick={() => {
                  removeComment(comment.uuid);
                  alert(
                    `deleting comment from ${comment.name}. Please refresh`
                  );
                  window.location.reload();
                }}
              >
                Delete ✂
              </p> */}
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

export default Comments;

// const commentsSample = [
//   { user: "Friend", comment: "Hello! I like hitchhiking too" },
//   { user: "FriendTwo", comment: "Wow, let's go to Iceland together" },
//   { user: "FriendThree", comment: "lolololol" },
// ];

// dateFormat("Jun 9 2007", "fullDate");

// const [commentsArr, setCommentsArr] = useState([]);

// function fetchComments() {
//   setCommentsArr(commentsSample);
// }

// useEffect(() => {
//   fetchComments();
// }, []);
