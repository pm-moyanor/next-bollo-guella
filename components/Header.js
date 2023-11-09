import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldHideHeader = scrollPosition > 100;
      setIsScrolled(shouldHideHeader);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`${styles.headerWrapper} ${
          isScrolled ? styles.fixedHeader : ""
        } ${isScrolled ? styles.hiddenHeader : ""}`}
      >
        <Image src="/bollo-guella-logo.png" width={100} height={100} />
        <ul className={styles.navList}>
          <li>
            <a href="#about">Acerca de</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
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
