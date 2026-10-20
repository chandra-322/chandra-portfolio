
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-symbol">C.</span>

        <span className="brand-name">
          CHANDRA
          <small>FILM ENTHUSIAST</small>
        </span>
      </Link>

      <nav className="navbar-links">
        <Link to="/#films">Films</Link>
        <Link to="/#work">Work</Link>
        <Link to="/#scripts">Scripts</Link>
        <Link to="/#about">About</Link>
        <Link to="/#contact">Contact</Link>
      </nav>

      <Link to="/#contact" className="navbar-cta">
        LET'S TALK <span>↗</span>
      </Link>
    </header>
  );
}

export default Navbar;
