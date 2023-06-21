import React from "react";
import Image from "next/image";
import styles from "../styles/Banner.module.css"
import { Montserrat } from "@next/font/google";



const Banner = () => {
  return (
    <div className={styles.box}>
      <Image
        src="/gaelle-marcel-wPOV0W7ykxE-unsplash.jpg"
        width={500}
        height={600}
      />
     <div className={styles.wrapper}>
        <h2 style={{ fontFamily: "Montserrat, sans-serif" }}>Nuestra filosofía para hacer pan se basa en el equilibrio</h2>
          <div>
            <div className={styles.aboutWrapper}>
           
              <Image
              src="/jennifer-burk-wV1Q_vvc1GY-unsplash.jpg"
              width={200}
              height={280}
              />
              <div className={styles.aboutTextWrapper}>
              <p>De la granja a la mesa</p>
              <p>
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
