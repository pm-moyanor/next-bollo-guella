import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
             <Image src="/bollo-guella-logo.png" width={100} height={100}/>

      <h2>Nuestra filosofía para hacer pan se basa en el equilibrio</h2>
      <div>
      <Image src="/bollo-guella-logo.png" width={100} height={100}/>

        <p>De la granja a la mesa</p>
        <p>Bollo Güella es una panadería de Mendoza que elabora panes y pastelería artesanal hecha a mano con técnicas tradicionales.</p>
      </div>
    </div>
  );
};

export default Banner;
