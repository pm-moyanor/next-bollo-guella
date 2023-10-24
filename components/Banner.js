import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Banner.module.css";
import { Montserrat } from "@next/font/google";

const Banner = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ x: -200, opacity: 0 }} // Initial position and opacity
        animate={{ x: 0, opacity: 1 }} // Animation target position and opacity
        transition={{ duration: 1 }} // Animation duration in seconds
      >
        <Image
          src="/gaelle-marcel-wPOV0W7ykxE-unsplash.jpg"
          width={630}
          height={900}
          
        />
       </motion.div>

      <div className={styles.wrapper}>
      <motion.div
        initial={{ y: -200, opacity: 0 }} // Initial position and opacity
        animate={{ y: 0, opacity: 1 }} // Animation target position and opacity
        transition={{ duration: 1 }} // Animation duration in seconds
      >
        <h2 style={{ fontFamily: "Montserrat, sans-serif" }}>
          Nuestra filosofía para hacer pan se basa en el equilibrio
        </h2>
        </motion.div>
        <div>
          <div className={styles.aboutWrapper}>
            <motion.div
              initial={{ x:200, opacity: 0 }} // Initial position and opacity
              animate={{x:0, opacity: 1 }} // Animation target position and opacity
              transition={{ duration: 1}} // Animation duration in seconds
            >
              <Image
                src="/jennifer-burk-wV1Q_vvc1GY-unsplash.jpg"
                width={240}
                height={350}
              />
            </motion.div>
            <div className={styles.aboutTextWrapper}>
              <p style={{ paddingBottom: 30 }}>De la granja a la mesa</p>
              <p style={{ width: 300, fontWeight: "200" }}>
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
