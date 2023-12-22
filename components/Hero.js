import React from "react";
import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="wrapper">
    
      <div className={styles.statement}>
      <motion.div
        initial={{ x: 300, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1.2 }} 
      >
      <h2 >
      Descubre la magia de lo artesanal en cada ingrediente
      </h2>
      </motion.div>
      </div>
    
    </div>
  );
};

export default Hero;
