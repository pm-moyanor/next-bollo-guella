import React from "react";
import Image from "next/image";
import styles from "../styles/Banner.module.css"
import { Montserrat } from "@next/font/google";



const Banner = () => {
  return (
    <div className={styles.box}>
      <Image
        src="/gaelle-marcel-wPOV0W7ykxE-unsplash.jpg"
        width={660}
        height={750}
      />
     <div className={styles.wrapper}>
        <h2 style={{ fontFamily: "Montserrat, sans-serif" }}>Nuestra filosofía para hacer pan se basa en el equilibrio</h2>
          <div>
            <div className={styles.aboutWrapper}>
           
              <Image
              src="/jennifer-burk-wV1Q_vvc1GY-unsplash.jpg"
              width={150}
              height={220}
              />
              <div className={styles.aboutTextWrapper}>
              <p style={{paddingBottom : 30}}>De la granja a la mesa</p>
              <p style={{width: 300}}>
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
