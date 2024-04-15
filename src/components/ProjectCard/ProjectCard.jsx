import React from "react";
import "./ProjectCard.css";
import ReactPlayer from "react-player/lazy";

const ProjectCard = ({
  id,
  image,
  title,
  description,
  skills,
  links,
  videoUrl,
  url,
}) => {
  return (
    <figure className="card-container">
      {/* <img className="project-image" src={image} alt={title} /> */}
      {image ? (
        <a href={url} target="a_blank">
          <img className="project-image" src={image} alt={title} />
        </a>
      ) : (
        <ReactPlayer url={videoUrl} width="100%" controls loop />
      )}
      <div className="card-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-skills">
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
