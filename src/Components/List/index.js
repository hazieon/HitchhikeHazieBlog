import React from "react";
import styles from "./index.module.css";

function List({ image, listOne, listTwo }) {
  return (
    <>
      <div className={styles.listBox}>
        <div>
          {/* <h2 className={styles.listColumn}>hello</h2> */}
          <ul className={styles.listList}>
            {listOne.map((item, index) => {
              return <li className={styles.listItem}>{item}</li>;
            })}
          </ul>
        </div>
        <div>
          {/* <h2 className={styles.listColumn}>hello</h2> */}
          <img className={styles.listImage} src={image} alt="list visual" />
        </div>
        <div>
          {/* <h2 className={styles.listColumn}>hello</h2> */}
          <ul className={styles.listList}>
            {listTwo.map((item, index) => {
              return <li className={styles.listItem}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default List;
