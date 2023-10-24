import React from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles["wrapper"]}>
      <Image
        src="/pexels-cottonbro-studio-4686837.jpg"
        width={380}
        height={500}
      />
      <Image
        src="/pexels-chevanon-photography-302890.jpg"
        width={380}
        height={500}
      />
      <Image src="/pexels-skyler-ewing-9295344.jpg" width={630} height={500} />

      <Image
        src="/pexels-cottonbro-studio-3943178.jpg"
        width={380}
        height={500}
      />
    </div>
  );
};

export default Gallery;
