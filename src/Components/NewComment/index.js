import React, { useState } from "react";
import styles from "./index.module.css";

function NewComment() {
  const [name, setName] = useState("Anonymous");
  const [email, setEmail] = useState("unspecified@gmail.com");
  const [comment, setComment] = useState("Hello hello hello");
  const [country, setCountry] = useState("Earth");
  return (
    <div className={styles.newCommentContainer}>
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
            setEmail(e.target.value);
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
    </div>
  );
}

export default NewComment;

// uuid, name, email, comment, country, date
