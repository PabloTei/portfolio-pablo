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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(formData);

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
        ></textarea>
      </label>
      <button className="button" type="submit">
        ENVIAR
      </button>
    </form>
  );
};

export default ContactForm;
