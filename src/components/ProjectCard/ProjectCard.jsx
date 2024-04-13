import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ id, image, title, description, skills, links }) => {
  return (
    <figure className="card-container">
      <img src={image} alt={title} />
      <div className="card-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-links">
          <ul>
            <li>
              <p>Tecnologías: </p>
            </li>
            {skills.map((skill, index) => (
              <li key={index}>
                <img src={skill} alt={`Skill ${index}`} />
              </li>
            ))}
          </ul>
        </div>
        <div className="card-links">
          <ul>
            <li>
              <p>Enlaces: </p>
            </li>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img src={link.image} alt={link.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </figure>
  );
};

export default ProjectCard;
