import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
  const { state } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    // Lógica para manejar los cambios en el formulario
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para validar y enviar el formulario
    setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail.`);
  };

  return (
    <div className={`contact ${state.theme}`}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Completo:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Contact;
