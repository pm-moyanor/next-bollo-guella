import React from "react";
import Image from "next/image";
import styles from "../styles/Menu.module.css"

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <p>La panaderia</p>
        <p>
          Descubre nuestra selección de panes y pastelería disponible para
          llevar y para envío a domicilio.
        </p>
        <button>Pedir ahora</button>
      </div>
      <div>
        <ul className={styles.menuList}>
          <li>
            <Image src="/monika-grabkowska-mha2dvydACg-unsplash.jpg" width={400} height={420} />
            <h4>Pan rústico</h4>
            <p>Harina francesa, harina japonesa, huevo, manteca de Isigny</p>
          </li>
          <li>
            <Image src="/yosep-sugiarto-1PEqqv4i2iM-unsplash.jpg" width={400} height={420} />
            <h4>Rollo de canela</h4>
            <p>Harina francesa, huevo, manteca de Isigny, canela</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
