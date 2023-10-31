// pages/blog.js
import React from "react";
import BlogPost from "../components/BlogPost";

const BlogPage = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <BlogPost
        date="17/7/20"
        title="Bollo Güella fue votada como la mejor panadería local"
        imageSrc="/pexels-chevanon-photography-302890.jpg"
        content={
          <div>
            <p>
              Estamos emocionados de anunciar que Bollo Güella ha sido
              reconocida como la mejor panadería local en la última encuesta de
              la comunidad. Queremos agradecer a todos nuestros clientes por su
              apoyo continuo.
            </p>
            <p>
              Esta distinción es un testimonio de nuestro compromiso con la
              calidad y la dedicación de nuestro equipo. Continuaremos horneando
              deliciosos productos para usted todos los días.
            </p>
            <p>
              Gracias por ser parte de la familia Bollo Güella y por hacer
              posible este logro. Esperamos seguir sirviéndote con las mejores
              opciones de panadería en la ciudad.
            </p>
          </div>
        }
      />

      <BlogPost
        date="17/7/20"
        title="Nuestra receta de croissant clásico"
        imageSrc="/pexels-cottonbro-studio-3943178.jpg"
        content={
          <div>
            <p>
              Hoy compartimos con ustedes nuestra receta secreta de croissant
              clásico. Los croissants recién horneados son una delicia para el
              desayuno o la merienda.
            </p>
            <p>
              Ingredientes:
              <ul>
                <li>250g de harina</li>
                <li>25g de azúcar</li>
                <li>5g de sal</li>
                <li>10g de levadura fresca</li>
                <li>125ml de agua tibia</li>
                <li>125ml de leche tibia</li>
                <li>200g de mantequilla</li>
              </ul>
            </p>
            <p>
              Siga nuestro tutorial detallado para crear croissants suaves y
              escamosos en la comodidad de su hogar.
            </p>
          </div>
        }
      />
      <BlogPost
        date="17/7/20"
        title="Cómo empezar a hacer pan"
        imageSrc="/pexels-karolina-grabowska-4495798.jpg"
        content={
          <div>
            <p>
              Si eres nuevo en la panadería casera, no te preocupes. En este
              artículo, te mostramos los pasos básicos para comenzar a hacer tu
              propio pan delicioso.
            </p>
            <p>
              El pan casero es una experiencia gratificante. Con unos pocos
              ingredientes simples y un poco de paciencia, puedes hornear pan
              fresco en tu cocina.
            </p>
            <p>
              Aprende sobre la selección de harina, la preparación de la masa,
              la fermentación y la cocción. ¡Pronto estarás disfrutando del
              aroma y el sabor de un pan recién horneado en casa!
            </p>
          </div>
        }
      />
    </div>
  );
};

export default BlogPage;
