import { useState } from "react";
import "../styles.css/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <img src="/images/logo.png" alt="logo" className="logo" />
      <nav className="navbar">
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#acerca-de-mi">Acerca de mí</a>
          </li>
          <li>
            <a href="#mis-proyectos">Mis proyectos</a>
          </li>
          <li>
            <a href="#contactame">Contáctame</a>
          </li>
        </ul>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </nav>
    </header>
  );
};
export default Header;
