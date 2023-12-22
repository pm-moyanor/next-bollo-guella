import React from "react";
import Link from "next/link"; // Import Link from Next.js
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  const posts = [
    {
      date: "17/7/20",
      title: "Bollo Güella fue votada como la mejor panadería local",
      link: "/post1",
    },
    {
      date: "17/7/20",
      title: "Nuestra receta de croissant clásico",
      link: "/post2",
    },
    {
      date: "17/7/20",
      title: "Cómo empezar a hacer pan",
      link: "/post3",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <p>Detrás de la cocina</p>
        <p>
          Lee nuestro blog para acceder a recetas y noticias y para conocer
          mejor lo que sucede en nuestra cocina.
        </p>
        <button>Leer más</button>
      </div>

      <div className={styles.imageListWrapper}>
      <motion.div
        initial={{ x: 300, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
      >
        <Image src="/drop-bread.avif" width={250} height={350}  />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
        className={styles.postList} 
      >
 
          {posts.map((post, index) => (
            < div key={index} className={styles.postWrapper}>
              <div className={styles.horizontalRule}></div>
              <div className={styles.dateTitle}>
                <p>{post.date}</p>
                <Link href={post.link}>
                  {post.title}
                </Link>
              </div>
            </div>
          ))}
          <div className={styles.horizontalRule}></div>
    
      </motion.div>
      </div>
      
    </div>
  );
};

export default Blog;
