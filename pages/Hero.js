import React from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import breadBoard from "../public/pexels-rdne-stock-project-8964024.jpg"
import grainBread from "../public/victoria-shes-IUk1S6n2s0o-unsplash.jpg"

const Hero = () => {
  return (
    <div>
      <Image
        src={grainBread}
        sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: 'auto',
          padding: "30px"
        }}
      

      />
      <h2 className={styles.statement}>
        Creemos que la calidad de nuestro pan depende de los ingredientes que
        usemos
      </h2>
    </div>
  );
};

export default Hero;
