import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Banner.module.css";
import { Montserrat } from "@next/font/google";

const Banner = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.largeImgWrapper}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/gaelle-marcel-wPOV0W7ykxE-unsplash.jpg"
          layout="fill" 
          objectFit="cover"
   
        />
      </motion.div>

      <div className={styles.wrapper}>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ fontFamily: "Montserrat, sans-serif" }}>
            Nuestra filosofía para hacer pan se basa en el equilibrio
          </h2>
        </motion.div>
        <div>
          <div className={styles.aboutWrapper}>
            <motion.div
              className={styles.image}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/jennifer-burk-wV1Q_vvc1GY-unsplash.jpg"
               height={200}
               width={100}
                layout="responsive"
              />
            </motion.div>
            <div className={styles.aboutTextWrapper}>
              <p style={{ paddingBottom: 20 }}>De la granja a la mesa</p>
              <p >
                Bollo Güella es una panadería de Mendoza que elabora panes y
                pastelería artesanal hecha a mano con técnicas tradicionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
