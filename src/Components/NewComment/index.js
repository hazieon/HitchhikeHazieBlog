import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

function NewComment() {
  const [name, setName] = useState("Anonymous");
  const [email, setEmail] = useState("unspecified@gmail.com");
  const [country, setCountry] = useState("Earth");
  const [comment, setComment] = useState("Hello hello hello");

  const [commentObj, setCommentObj] = useState();

  useEffect(() => {
    let commentObject = {
      name: name,
      email: email,
      country: country,
      comment: comment,
    };
    setCommentObj(commentObject);
  }, [name, country, email, comment]);

  function postComment() {
    if (
      commentObj.name !== "anonymous" &&
      commentObj.email !== "unspecified@gmail.com" &&
      commentObj.email.includes("@") &&
      commentObj.country !== "Earth" &&
      commentObj.comment !== "Hello hello hello" &&
      commentObj.comment.length > 40
    ) {
      console.log("pass");
    } else {
      console.log("issue with comment");
    }

    //check each object value is filled and not default
    //email valid
    //if invalid, alert
    //if all valid, post to db eeeeek
  }

  return (
    <div className={styles.newCommentContainer}>
      <h3>Post a Comment:</h3>
      <div className={styles.infoBox}>
        <input
          className={styles.nameBox}
          onInput={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name 名前 이름 名字"
        ></input>
        <input
          className={styles.emailBox}
          onInput={(e) => {
            if (e.target.value.includes("@")) {
              setEmail(e.target.value);
            } else {
              console.log("email invalid");
            }
          }}
          type="text"
          placeholder="email"
        ></input>

        <input
          className={styles.countryBox}
          onInput={(e) => {
            setCountry(e.target.value);
          }}
          type="text"
          placeholder="Country"
        ></input>
      </div>
      <input
        className={styles.commentBox}
        onInput={(e) => {
          setComment(e.target.value);
        }}
        type="text"
        placeholder="Type a message..."
      ></input>
      <button
        className={styles.postButton}
        onClick={() => {
          console.log(name, email, country, comment);
          postComment();
        }}
      >
        Post
      </button>
    </div>
  );
}

export default NewComment;

// uuid, name, email, comment, country, date
