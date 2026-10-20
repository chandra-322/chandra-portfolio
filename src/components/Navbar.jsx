
function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-brand">
        <span className="brand-symbol">C.</span>

        <span className="brand-name">
          CHANDRA
          <small>FILM ENTHUSIAST</small>
        </span>
      </a>

      <nav className="navbar-links">
        <a href="#films">Films</a>
        <a href="#work">Work</a>
        <a href="#scripts">Scripts</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="navbar-cta">
        LET'S TALK <span>↗</span>
      </a>
    </header>
  );
}

export default Navbar;
