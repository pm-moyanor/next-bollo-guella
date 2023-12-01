import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    const isLarge = window.innerWidth > 768;
    setIsLargeScreen(isLarge);
    if (isLarge) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav className={`${styles.headerWrapper}`}>
        <Image src="/bollo-guella-logo.png" width={80} height={80} />
        {isLargeScreen ? (
          <ul className={`${styles.navList}`}>
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
        ) : (
          <div className={styles.mobileMenu}>
            <button
              onClick={handleToggleMenu}
              className={styles.mobileMenuButton}
            >
              {isMobileMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} size="sm" />
              ) : (
                <FontAwesomeIcon icon={faBars} size="sm" />
              )}
            </button>
            {isMobileMenuOpen && (
              <ul className={`${styles.navList} ${styles.mobileMenu}`}>
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
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
