import React from "react";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <figure className="card-container">
      <img
        src="https://res.cloudinary.com/depifliz3/image/upload/v1709467784/ATEP-CONSULTING/PORTFOLIO/Marvel_whtcw8.jpg"
        alt="foto-marvel"
      />
      <div className="card-description">
        <h3>Portfolio Pablo</h3>
        <p>
          Dopefolio is a successful Open-Source project that I created which
          have been featured on some of the biggest tech sites like CSS-Tricks,
          Hostinger, etc & used by thousands of developers globally
        </p>
        <div className="card-links">
          <ul>
            <li>GH</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
    </figure>
  );
};

export default ProjectCard;
