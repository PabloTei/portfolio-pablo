import React, { useState, useRef, useEffect } from "react";
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
  endDate,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setContentHeight("0px");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        setContentHeight(`${contentRef.current.scrollHeight}px`);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-header-title">
          <h3>{title}</h3>
          <h4>{`${company} (${date}) - ${antiquity(startDate, endDate)}`}</h4>
        </div>
        <span>
          {isOpen ? (
            <img src={images.minus} alt="minus-sign" />
          ) : (
            <img src={images.plus} alt="plus-sign" />
          )}
        </span>
      </div>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          maxHeight: contentHeight,
          transition: "max-height 0.3s ease-out",
        }}
      >
        <div className="accordion-content-description">
          <p>{description}</p>
          <img src={logo} alt={`logo-company-${company}`} />
        </div>
        <div className="accordion-content-skills">
          <ul className="icons-skills">
            {skills1.map((skill) => (
              <li key={skill.title} className="accordion-content-skills-skill">
                <img src={skill.icon} alt={skill.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
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
