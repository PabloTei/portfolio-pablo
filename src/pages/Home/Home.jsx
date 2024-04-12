import React, { lazy, useState } from "react";
import { Accordion } from "../../components/Accordion/Accordion";
import ContactForm from "../../components/ContactForm/ContactForm";
import Spinner from "../../components/Spinner/Spinner";
import { links, images, navBarElements, skills, projects } from "../../consts";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="hero">
        <h1>HEY, I'M PABLO TEIJEIRO</h1>
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
        <p>
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product
        </p>
        <a className="button" href="path_to_file" download="CV_PabloTeijeiro">
          DESCARGAR CV <img src={images.download} alt="img-download" />
        </a>
        <Spinner />
      </section>
      <section className="experience" id={navBarElements[1]}>
        <div className="section">
          <h2>EXPERIENCIA PROFESIONAL</h2>
          <span className="line-bottom"></span>
          <p>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
          <Accordion />
        </div>
      </section>
      <section className="projects" id={navBarElements[2]}>
        <div className="section">
          <h2>PROYECTOS</h2>
          <span className="line-bottom"></span>
          <p>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>
        <div className="all-projects">
          {projects.map((project) => (
            <figure key={project.id} className="project">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`img-project-#${project.title}`}
                  loading="lazy"
                />
              </div>
              <div className="project-description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="button">
                  VER MAS
                </a>
              </div>
            </figure>
          ))}
        </div>
      </section>
      <section id={navBarElements[3]} className="about">
        <div className="section">
          <h2>SOBRE MI</h2>
          <span className="line-bottom"></span>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="about-me">
          <div className="know">
            <h3>¡Conóceme!</h3>
            <div className="paragraph">
              <p>
                I'm a Frontend Focused Web Developer building and managing the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                Projects section.
              </p>
            </div>
            <div className="paragraph">
              <p>
                I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin and Instagram where I post useful content related
                to Web Development and Programming.
              </p>
            </div>
            <div className="paragraph">
              <p>
                I'm open to Job opportunities where I can contribute, learn, and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </p>
            </div>
            <a className="button" href="#contacto">
              CONTACTO
            </a>
          </div>
          <div className="my-skills">
            <h3>Mi stack</h3>
            <ul>
              {skills.map((skill) => (
                <li key={skill.title}>
                  <img src={skill.icon} alt={skill.icon} />
                  <p>{skill.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id={navBarElements[4]} className="contact">
        <div className="section">
          <h2>CONTACTO</h2>
          <span className="line-bottom"></span>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
};

export default Home;
