export default function Footer() {
  return (
    <footer className="container footer">
      <div className="row">
        <small>© {new Date().getFullYear()} Your Name</small>
        <div>
          <a href="https://github.com/yourname" aria-label="GitHub">GitHub</a> ·{" "}
          <a href="https://www.linkedin.com/in/yourname" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
