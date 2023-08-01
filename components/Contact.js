import React from "react";
import styles from "../styles/Contact.module.css"

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.addressContainer}>
        <h3 className={styles.contactTitle}>Bollo Güella</h3>
        <div className={styles.contactAddress}>
          <p>123 Calle Demo</p>
          <p>Maipu, Mendoza.</p>

          <ul className={styles.socialIcons}>
            <li>twitter</li>
            <li>facebook</li>
            <li>instagram</li>
          </ul>

        </div>
      </div>
      <div className={styles.contactEmail}>
        <p>Regístrate con tu dirección de correo electrónico para recibir noticias y actualizaciones.</p>
        <form>
          <input type="text" className={styles.contactInput} placeholder="Correo electrónico" />
          <button className={styles.contactButton}>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
