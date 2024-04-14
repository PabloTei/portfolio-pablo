import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = "https://formspree.io/f/xeqypdeb";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Formulario enviado con éxito");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert(
        "Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          className="form-input"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Introduce tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email
        <input
          className="form-input"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Introduce tu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Mensaje
        <textarea
          className="form-input"
          name="message"
          placeholder="Introduce tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <button className="button" type="submit">
        ENVIAR
      </button>
    </form>
  );
};

export default ContactForm;
