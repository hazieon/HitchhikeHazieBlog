import React from "react";

//"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
function BlogCard({
  image,
  title,
  summary,
  subtitle,
  topics,
  textArr,
  imagesArr,
}) {
  return (
    <>
      <div style={{ maxWidth: "22rem" }}>
        <div>
          <img className="img-fluid" src={image} alt="" />
          <div>
            <h1>{title}</h1>
            <h2>{subtitle}hi</h2>
            <p>{topics}</p>
            <h5>{summary}</h5>
            <button>Click</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
