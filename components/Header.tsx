"use client";
import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.brand}>
          Nathan Hodgkiss
        </a>
        <nav className={styles.nav}>
          <a className={styles.link} href="#experience-title">
            About
          </a>
          <a className={styles.link} href="#projects">
            Projects
          </a>
          <a className={styles.link} href="#contact">
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
