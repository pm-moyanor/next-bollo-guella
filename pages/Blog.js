import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div>
      <div>
        <p>Detrás de la cocina</p>
        <p>
          Lee nuestro blog para acceder a recetas y noticias y para conocer
          mejor lo que sucede en nuestra cocina.
        </p>
        <button>Leer más</button>
      </div>
      <Image src="/bollo-guella-logo.png" width={100} height={100} />
      <div>
        <span>---</span>
        <p>17/7/20</p>
        <p>Bollo Güella fue votada como la mejor panadería local </p>
        <span>---</span>
        <p>17/7/20</p>
        <p>Nuestra receta de croissant clásico </p>
        <span>---</span>
        <p>17/7/20</p>
        <p>Cómo empezar a hacer pan </p>
        <span>---</span>
      </div>
    </div>
  );
};

export default Blog;
