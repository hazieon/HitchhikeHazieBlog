// import React, { useEffect, useState } from "react";
// import styles from "./index.module.css";
// import { blogPosts } from "../blogPosts";

// function BlogArticle({ id }) {
//   const [article, setArticle] = useState(0);

//   //   useEffect(() => {
//   //     if (id) {
//   //       const chosenArticle = blogPosts.id.findIndex(id);
//   //       setArticle(chosenArticle);
//   //       console.log(chosenArticle);
//   //     } else {
//   //       setArticle(1);
//   //       console.log(article);
//   //     }
//   //   });

//   useEffect(() => {
//     const selectedArticle = blogPosts.find((blogPosts) => blogPosts.id === id);
//     setArticle(selectedArticle.data);
//     console.log(article, "hi");
//     // setArticle(
//     //   categories.find((categoryData) => categoryData.title === title).data
//     // );
//   }, [id]);

//   return (
//     <div className={styles.container}>
//       <h1>id={id}</h1>
//     </div>
//   );
// }

// export default BlogArticle;
