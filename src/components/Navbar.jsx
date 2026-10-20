
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navigationPending = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (navigationPending.current) {
        lastScrollY.current = currentY;
        return;
      }

      if (currentY < 50) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      navigationPending.current = false;
      return;
    }

    const id = location.hash.slice(1);
    navigationPending.current = true;
    setVisible(true);

    let attempts = 0;
    let timer;

    const findSection = () => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        timer = window.setTimeout(() => {
          navigationPending.current = false;
          lastScrollY.current = window.scrollY;
        }, 700);

        return;
      }

      if (attempts++ < 20) {
        timer = window.setTimeout(findSection, 50);
      } else {
        navigationPending.current = false;
      }
    };

    timer = window.setTimeout(findSection, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  const goToSection = (id) => {
    setVisible(true);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    if (location.hash !== `#${id}`) {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`navbar ${
        visible ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <Link
        to="/"
        className="navbar-brand"
        onClick={() => setVisible(true)}
      >
        <span className="brand-symbol">C.</span>
        <span className="brand-name">
          CHANDRA
          <small>FILM ENTHUSIAST</small>
        </span>
      </Link>

      
<nav className={`navbar-links ${menuOpen ? "menu-open" : ""}`}>
  {[
    ["Films", "films"],
    ["Work", "work"],
    ["Scripts", "scripts"],
    ["About", "about"],
  ].map(([label, id]) => (
    <a
      key={id}
      href={`/#${id}`}
      onClick={(event) => {
        event.preventDefault();
        setMenuOpen(false);
        goToSection(id);
      }}
    >
      {label}
    </a>
  ))}

  <a
    href="/#contact"
    className="mobile-contact-link"
    onClick={(event) => {
      event.preventDefault();
      setMenuOpen(false);
      goToSection("contact");
    }}
  >
    Contact ↗
  </a>
</nav>

<div className="navbar-actions">
  <a
    href="/#contact"
    className="navbar-cta"
    onClick={(event) => {
      event.preventDefault();
      setMenuOpen(false);
      goToSection("contact");
    }}
  >
    LET'S TALK <span aria-hidden="true">↗</span>
  </a>

  <button
    type="button"
    className="navbar-menu-toggle"
    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={menuOpen}
    onClick={() => setMenuOpen((open) => !open)}
  >
    {menuOpen ? "✕" : "☰"}
  </button>
</div>

    </header>
  );
}

export default Navbar;
