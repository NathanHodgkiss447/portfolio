import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="container footer">
      <div className={styles.row}>
        <small>© {new Date().getFullYear()} Nathan Hodgkiss</small>
        <div>
          <a href="https://github.com/NathanHodgkiss447">GitHub</a> ·{" "}
          <a href="https://www.linkedin.com/in/nathanhodgkiss/">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
