import React from "react";
import BlogPost from "../components/BlogPost";
import { Montserrat } from "@next/font/google";
import Header from "../components/Header";
import Contact from "../components/Contact";

const monserrat = Montserrat({ subsets: ["latin"] });

const BlogPage = () => {
  return (
    <div className={monserrat.className}>
      <Header />
      <div className="overlay"></div>
        <div className="background-image"></div>
      <div className={`${monserrat.className} blogContainer`}>
        {/* <h1>Blog Posts</h1> */}
        <BlogPost
          date="17/7/20"
          title="Bollo Güella fue votada como la mejor panadería local"
          imageSrc="/pexels-chevanon-photography-302890.jpg"
          content={
            <>
              <p>
                Estamos emocionados de anunciar que Bollo Güella ha sido
                reconocida como la mejor panadería local en la última encuesta
                de la comunidad. Queremos agradecer a todos nuestros clientes
                por su apoyo continuo.
              </p>
              <p>
                Esta distinción es un testimonio de nuestro compromiso con la
                calidad y la dedicación de nuestro equipo. Continuaremos
                horneando deliciosos productos para usted todos los días.
              </p>
              <p>
                Gracias por ser parte de la familia Bollo Güella y por hacer
                posible este logro. Esperamos seguir sirviéndote con las mejores
                opciones de panadería en la ciudad.
              </p>
              <p>
                En Bollo Güella, nos esforzamos por ofrecer una amplia variedad
                de panes, pasteles y productos horneados de alta calidad.
                Nuestro equipo de panaderos artesanales trabaja incansablemente
                para garantizar que cada bocado sea una deliciosa experiencia.
                No importa si prefieres un croissant recién horneado o un pan
                rústico, tenemos algo para todos los amantes del pan.
              </p>
              <p>
                Esperamos verte pronto en nuestra panadería y continuar
                sirviéndote con el mejor pan de la ciudad.
              </p>
            </>
          }
        />
        <span />
        <BlogPost
          date="17/7/20"
          title="Nuestra receta de croissant clásico"
          imageSrc="/pexels-cottonbro-studio-3943178.jpg"
          content={
            <>
              <p>
                Hoy compartimos con ustedes nuestra receta secreta de croissant
                clásico. Los croissants recién horneados son una delicia para el
                desayuno o la merienda.
              </p>
              <p>Ingredientes:</p>
              <ul>
                <li>250g de harina</li>
                <li>25g de azúcar</li>
                <li>5g de sal</li>
                <li>10g de levadura fresca</li>
                <li>125ml de agua tibia</li>
                <li>125ml de leche tibia</li>
                <li>200g de mantequilla</li>
              </ul>

              <p>
                Siga nuestro tutorial detallado para crear croissants suaves y
                escamosos en la comodidad de su hogar.
              </p>
              <p>
                Ahora, déjame guiarte a través de los pasos para preparar estos
                croissants clásicos en tu propia cocina. Sigue esta receta y
                sorprende a tu familia con croissants recién horneados.
              </p>
              <h3>Instrucciones:</h3>
              <ul>
                <li>
                  Mezcla la harina, el azúcar y la sal en un tazón grande.
                </li>
                <li>
                  Disuelve la levadura en agua tibia y agrégala a la mezcla de
                  harina.
                </li>
                <li>Añade la leche tibia y forma una masa suave.</li>
                <li>
                  Deja reposar la masa en un lugar cálido hasta que duplique su
                  tamaño.
                </li>
                <li>
                  Extiende la masa en un rectángulo y agrega la mantequilla.
                  Luego, dobla la masa en tres partes.
                </li>
                <li>Refrigera durante 30 minutos, luego repite el proceso.</li>
                <li>
                  Extiende la masa, córtala en triángulos y enróllala en forma
                  de croissant.
                </li>
                <li>Hornea los croissants a 200°C durante 15-20 minutos.</li>
              </ul>
              <p>
                ¡Disfruta de tus croissants recién horneados con una taza de
                café!
              </p>
            </>
          }
        />
        <span style={{ color: "white", width: "100px", height: "1px" }} />
        <BlogPost
          date="17/7/20"
          title="Cómo empezar a hacer pan"
          imageSrc="/pexels-karolina-grabowska-4495798.jpg"
          content={
            <>
              <p>
                Si eres nuevo en la panadería casera, no te preocupes. En este
                artículo, te mostramos los pasos básicos para comenzar a hacer
                tu propio pan delicioso.
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
              <p>
                Hacer pan en casa es una actividad relajante y gratificante.
                Para comenzar, necesitas algunos ingredientes básicos y un poco
                de paciencia. Aquí tienes una guía rápida para empezar:
              </p>
              <h3>Pasos básicos para hacer pan:</h3>
              <ul>
                <li>
                  Selecciona una receta de pan que te guste y reúne los
                  ingredientes.
                </li>
                <li>
                  Mide la harina, el agua, la levadura y la sal según la receta.
                </li>
                <li>
                  Mézclalos para formar una masa y amásala hasta que esté suave
                  y elástica.
                </li>
                <li>
                  Deja que la masa fermente y duplique su tamaño en un lugar
                  cálido.
                </li>
                <li>
                  Hornea el pan hasta que esté dorado y suene hueco al golpear
                  la parte inferior.
                </li>
              </ul>
              <p>
                Con estos pasos básicos, estarás en camino para hacer deliciosos
                panes en casa. Experimenta con diferentes tipos de pan y
                disfruta del proceso de horneado.
              </p>
            </>
          }
        />
      </div>
      <Contact />
    </div>
  );
};

export default BlogPage;
