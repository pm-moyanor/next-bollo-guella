import React from "react";
import Link from "next/link"; // Import Link from Next.js
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Blog.module.css";

const Blog = () => {
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
      <motion.div
        initial={{ x: 300, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
      >
        <Image src="/drop-bread.avif" width={350} height={450} style={{ marginTop:"15px"}}/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
        <div className={styles.postList}>
          <div className={styles.horizontalRule}></div>
          <div className={styles.dateTitle}>
            <p>17/7/20</p>
            <Link href="/post1"> 
            Bollo Güella fue votada como la mejor panadería local
            </Link>
          </div>

          <div className={styles.horizontalRule}></div>
          <div className={styles.dateTitle}>
            <p>17/7/20</p>
            <Link href="/post2"> 
              Nuestra receta de croissant clásico
            </Link>
          </div>

          <div className={styles.horizontalRule}></div>
          <div className={styles.dateTitle}>
            <p>17/7/20</p>
            <Link href="/post3"> 
              Cómo empezar a hacer pan
            </Link>
          </div>

          <div className={styles.horizontalRule}></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
