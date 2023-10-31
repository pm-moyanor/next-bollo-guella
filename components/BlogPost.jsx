
import React from "react";
import Image from "next/image";
import styles from "../styles/BlogPost.module.css";

const BlogPost = ({ date, title, imageSrc, content }) => {
  return (
    <div className={styles.blogPost}>
      <div className={styles.dateTitle}>
  
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{content}</p>
      </div>
      <Image src={imageSrc} width={350} height={200} />
    </div>
  );
};

export default BlogPost;
