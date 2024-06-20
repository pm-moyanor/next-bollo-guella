import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Image from "next/image";
import styles from "../styles/Gallery.module.css";

const listItemAnimation = {
  hidden: { y: "-300", opacity: 0 },
  visible: {
    y: "0px",
    opacity: 1,
  },
};

const Gallery = () => {
  const images = [
    "/pexels-cottonbro-studio-4686837.jpg",
    "/pexels-chevanon-photography-302890.jpg",
    "/diliara-garifullina-Uju0eqW7G7U-unsplash.jpg",
    "/pexels-cottonbro-studio-3943178.jpg",
  ];

  return (
    <div className={styles["wrapper"]}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          variants={listItemAnimation}
          initial="hidden"
          whileInView="visible"
          transition={{duration:1, delay: 0.3 * index/1.3 }}
        >
          <li style={{ listStyle: "none" }}>
            <Image src={image} width={330} height={470} alt="pictures of food" />
          </li>
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
