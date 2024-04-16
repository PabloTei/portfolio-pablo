import React, { useState } from "react";
import { experiences, images } from "../../consts";
import antiquity from "../../services";
import "./Accordion.css";

const ExpAccordionItem = ({
  title,
  company,
  date,
  description,
  logo,
  skills1,
  startDate,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-header-title">
          <h3>{`${title}`}</h3>
          <h4>{`${company} (${date}) - ${antiquity(startDate)}`}</h4>
        </div>
        <span>
          {isOpen ? (
            <img src={images.minus} alt="minus-sign" />
          ) : (
            <img src={images.plus} alt="minus-sign" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <div className="accordion-content-description">
            <p>{description}</p>
            <img src={logo} alt={`logo-company-${company}`} />
          </div>
          <div className="accordion-content-skills">
            <ul className="icons-skills">
              {skills1.map((skill) => (
                <li
                  key={skill.title}
                  className="accordion-content-skills-skill"
                >
                  <img src={skill.icon} alt={skill.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export const Accordion = () => {
  return (
    <div className="accordion-container">
      {experiences.map((exp, index) => (
        <ExpAccordionItem key={index} {...exp} />
      ))}
    </div>
  );
};
export default Accordion;
