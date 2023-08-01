import React from "react";
import styles from "../styles/Header.module.css"
import Image from "next/image";

const Header = () => {
  return (
    <div>
        
      <nav className={styles.headerWrapper}>
        <Image src="/bollo-guella-logo.png" width={100} height={100}/>
        <ul className={styles.navList}>
          <li>
            <a href="#about">Acerca de</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
