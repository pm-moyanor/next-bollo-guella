import React from "react";
import styles from "../styles/BlogPost.module.css";

const BlogPost = ({ date, title, imageSrc, content }) => {
  return (
    <div className={styles.blogPost}>
      <div className={styles.info}>
        <div className={styles.titleDate}>
          <h2 className={styles.blogTitle}>{title}</h2>
          <p className={styles.blogDate}>{date}</p>
        </div>
        <span className={styles.divider}/>
        <div className={styles.blogContent}>
   
          {content}
        </div>
      </div>

      <div className={styles.image}>
        <img src={imageSrc} />
      </div>
    </div>
  );
};

export default BlogPost;
