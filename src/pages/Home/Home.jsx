import React, { lazy, useState } from "react";
import { Accordion } from "../../components/Accordion/Accordion";
import ContactForm from "../../components/ContactForm/ContactForm";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Spinner from "../../components/Spinner/Spinner";
import { links, images, navBarElements, skills, projects } from "../../consts";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="section">
          <h1>¡Hola, soy Pablo! 👨‍💻</h1>
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
            Como Desarrollador Web orientado a resultados, me especializo en la
            construcción y gestión de sitios web y aplicaciones que impulsan el
            éxito del producto en su totalidad
          </p>
          <a className="button" href="path_to_file" download="CV_PabloTeijeiro">
            DESCARGAR CV <img src={images.download} alt="img-download" />
          </a>
          <Spinner />
        </div>
      </section>
      <section className="experience" id={navBarElements[1]}>
        <div className="section">
          <h2>EXPERIENCIA PROFESIONAL</h2>
          <span className="line-bottom"></span>
          <p>
            Explora mi experiencia profesional y descubre algunos de los
            proyectos que he desarrollado para clientes, cada uno con su propio
            análisis detallado
          </p>
          <Accordion />
        </div>
      </section>
      <section className="projects" id={navBarElements[2]}>
        <div className="section">
          <h2>PROYECTOS</h2>
          <span className="line-bottom"></span>
          <p>
            Aquí encontrarás algunos de los proyectos personales y para clientes
            que he creado, cada uno con su propio desarrollo
          </p>
          <div className="all-projects">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                skills={project.skills}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </section>
      <section id={navBarElements[3]} className="about">
        <div className="section">
          <h2>SOBRE MI</h2>
          <span className="line-bottom"></span>
          <p>
            Aquí encontrarás más información sobre mí, lo que hago y mis
            habilidades actuales, principalmente en términos de programación y
            tecnología
          </p>
          <div className="about-me">
            <div className="know">
              <h3>¡Conóceme!</h3>
              <div className="paragraph">
                <p>
                  ¡Hola! Soy un apasionado desarrollador web, especializado en
                  el FrontEnd, centrado en crear y gestionar la parte visual y
                  funcional de sitios web y aplicaciones. Mi objetivo es
                  contribuir al éxito general del producto mediante la creación
                  de experiencias web excepcionales.
                </p>
              </div>
              <div className="paragraph">
                <p>
                  En mi sección de Proyectos podrás encontrar ejemplos de mi
                  trabajo. Me encanta compartir mi conocimiento en desarrollo
                  web y programación con la comunidad, así que te invito a
                  conectarte conmigo en LinkedIn y GitHub.
                </p>
              </div>
              <div className="paragraph">
                <p>
                  Estoy abierto anuevas oportunidades donde pueda seguir
                  aprendiendo y creciendo. Si tienes una oportunidad que se
                  alinea con mis habilidades y experiencia, ¡me encantaría saber
                  de ti!
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
        </div>
      </section>
      <section id={navBarElements[4]} className="contact">
        <div className="section">
          <h2>CONTACTO</h2>
          <span className="line-bottom"></span>
          <p>
            No dudes en contactarme completando el formulario a continuación y
            me pondré en contacto contigo lo antes posible
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Home;
