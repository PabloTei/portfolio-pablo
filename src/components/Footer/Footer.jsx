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
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
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
        © Copyright 2024 . Made by <a href="#">Pablo Teijeiro</a>
      </p>
    </footer>
  );
};

export default Footer;
