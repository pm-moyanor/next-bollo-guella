import React from "react";
import Image from "next/image";
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

      <Image src="/drop-bread.avif" width={270} height={361} />
      <div className={styles.postList}>
        <div className={styles.horizontalRule}></div>
        <div className={styles.dateTitle}>
          <p>17/7/20</p>
          <p>Bollo Güella fue votada como la mejor panadería local </p>
          <Image src="/arrow-right_9847468.png" width={20} height={20}/>

        </div>

        <div className={styles.horizontalRule}></div>
        <div className={styles.dateTitle}>
          <p>17/7/20</p>
          <p>Nuestra receta de croissant clásico </p>
          <Image src="/arrow-right_9847468.png" width={20} height={20}/>

        </div>

        <div className={styles.horizontalRule}></div>
        <div className={styles.dateTitle}>
          <p>17/7/20</p>
          <p>Cómo empezar a hacer pan </p>
          <Image src="/arrow-right_9847468.png" width={17} height={20}/>
        </div>

        <div className={styles.horizontalRule}></div>
      </div>
    </div>
  );
};

export default Blog;
