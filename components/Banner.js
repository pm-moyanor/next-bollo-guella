import React from "react";
import Image from "next/image";

import styles from "../styles/Banner.module.css"
import { Montserrat } from "@next/font/google";



const Banner = () => {
  return (
    <div className={styles.container}>

     
     <Image
        src="/gaelle-marcel-wPOV0W7ykxE-unsplash.jpg"
width={830} height={900} 
      />
      <div className={styles.wrapper}>
        <h2 style={{ fontFamily: "Montserrat, sans-serif" }}>Nuestra filosofía para hacer pan se basa en el equilibrio</h2>
          <div>
            <div className={styles.aboutWrapper}>
           
              <Image
              src="/jennifer-burk-wV1Q_vvc1GY-unsplash.jpg"
              width={240}
              height={350}
              />
              <div className={styles.aboutTextWrapper}>
              <p style={{paddingBottom : 30}}>De la granja a la mesa</p>
              <p style={{width: 300, fontWeight:"200"}}>
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
