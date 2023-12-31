import React from "react";

import styles from "../styles/Menu.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <div id="menu" className={styles["wrapper"]}>
      <div className={styles.textWrapper}>
        <p>La panaderia</p>
        <p>
          Descubre nuestra selección de panes y pastelería disponible para
          llevar y para envío a domicilio.
        </p>
        <button>
          <Link href="https://www.pedidosya.com.ar/home-page" target="_blank">
            Pedir ahora
          </Link>
        </button>
      </div>
      <div>
        <ul className={styles.menuList}>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <li>
              <div className={styles.image}>
                <img src="/monika-grabkowska-mha2dvydACg-unsplash.jpg" />
              </div>

              <h4>Pan rústico</h4>
              <p>Harina francesa, harina japonesa, huevo, manteca de Isigny</p>
            </li>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <li>
              <div className={styles.image}>
                <img src="/yosep-sugiarto-1PEqqv4i2iM-unsplash.jpg" />
              </div>
              <h4>Rollo de canela</h4>
              <p>Harina francesa, huevo, manteca de Isigny, canela</p>
            </li>
          </motion.div>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
