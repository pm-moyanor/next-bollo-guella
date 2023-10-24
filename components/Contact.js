import React from "react";
import styles from "../styles/Contact.module.css";
const Contact = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.addressBlock}>
        <h3> Bollo Güella</h3>
        <div>
          <p>Maza esquina Belgrado,</p>
          <p> M5515 Maipú, Mendoza, Argentina</p>
        </div>
      </div>
      <div className={styles.newsletterBlock}>
        <p>
          Regístrate con tu dirección de correo electrónico para recibir
          noticias y actualizaciones.
        </p>
        <form>
          <input
            type="text"
            placeholder="Correo electrónico"
            style={{
              height: 50,
              border: "1px solid black",
              width: 250,
              padding: 10,
            }}
          ></input>
          <button
            style={{
              height: 50,
              backgroundColor: "rgb(136, 64, 28)",
              border: "1px solid black",
              width: 110,
              padding: 10,
              marginLeft: 20,
            }}
          >
            Registrarse
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Contact;
