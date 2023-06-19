import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Image src="/bollo-guella-logo.png" width={100} height={100} />
      <h2>
        Creemos que la calidad de nuestro pan depende de los ingredientes que
        usemos
      </h2>
    </div>
  );
};

export default Hero;
