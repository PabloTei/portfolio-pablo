import React, { useState } from "react";
import { experiences } from "../../consts";
import "./Accordion.css";

const ExpAccordionItem = ({
  title,
  company,
  date,
  description,
  logo,
  skills1,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{`${title} - ${company} (${date})`}</h3>
        <span>{isOpen ? "-" : "+"}</span>
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
