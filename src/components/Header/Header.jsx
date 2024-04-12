import React, { useState } from "react";
import { images, navBarElements } from "../../consts";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (element) => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <header>
      <div className="header">
        <div className="logo">
          <a href="#">
            <img src={images.pablo_image} alt="dev-photo"></img>
            <h1>PABLO TEIJEIRO</h1>
          </a>
        </div>
        <nav className={isMobileMenuOpen ? "mobile-menu" : "office-menu"}>
          <ul>
            {navBarElements.map((element) => (
              <li key={element}>
                <a
                  onClick={() => handleNavItemClick(element)}
                  href={element === "inicio" ? "#" : `#${element}`}
                >
                  {element.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <img
            src={isMobileMenuOpen ? images.close : images.menuNavBar}
            alt={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
