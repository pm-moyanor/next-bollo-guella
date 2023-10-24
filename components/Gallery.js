import React from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles["wrapper"]}>

      <div>
      <Image
        src="/pexels-cottonbro-studio-4686837.jpg"
        width={350}
        height={500}
      />
      <Image
        src="/pexels-chevanon-photography-302890.jpg"
        width={350}
        height={500}
      />
      <Image src="/diliara-garifullina-Uju0eqW7G7U-unsplash.jpg" width={350} height={500} />

      <Image
        src="/pexels-cottonbro-studio-3943178.jpg"
        width={350}
        height={500}
      />
      </div>
   
    </div>
  );
};

export default Gallery;
