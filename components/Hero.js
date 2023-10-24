import React from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import breadBoard from "../public/pexels-rdne-stock-project-8964024.jpg"
import grainBread from "../public/victoria-shes-IUk1S6n2s0o-unsplash.jpg"

const Hero = () => {
  return (
    <div className="wrapper">
    
      <div className={styles.statement}>
      <h2 >
      Descubre la magia de lo artesanal en cada ingrediente
      </h2>
      </div>
    
    </div>
  );
};

export default Hero;
