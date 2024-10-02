import { useState } from "react";
import "../styles.css/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
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

        <img src="../public/images/logo.png" alt="logo" className="logo" />
      </nav>
    </header>
  );
};
export default Header;
