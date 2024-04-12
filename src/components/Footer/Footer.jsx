import React from "react";
import { images, links } from "../../consts";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="dev-data">
          <h2>PABLO TEIJEIRO</h2>
          <p>
            Desarrollador Web especializado en construir el Frontend de sitios
            web y aplicaciones para garantizar el éxito del producto
          </p>
        </div>
        <div className="social-media">
          <h2>SOCIAL</h2>
          <ul>
            <li>
              <a href={links.linkedin} target="_blank">
                <img src={images.linkedin} alt="logo-linkedin" />
              </a>
            </li>
            <li>
              <a href={links.github} target="_blank">
                <img src={images.github} alt="logo-github" />
              </a>
            </li>
            <li>
              <a href="mailto:pteijeirolopez@gmail.com" target="_blank">
                <img src={images.email} alt="logo-email" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        © Copyright 2024 . Realizado por <a href="#">Pablo Teijeiro</a>
      </p>
    </footer>
  );
};

export default Footer;
