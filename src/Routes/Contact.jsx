import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../assets/icons/LeftArrow';
import Formulario from '../Components/Main/form/Form.jsx';
import { CheckCircleFillIcon } from '../assets/icons/CheckCircleFillIcon';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del tema del Contexto

const Contacto = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: { value: '', errors: null, validationClass: '' },
    email: { value: '', errors: null, validationClass: '' },
    isFormSubmitted: false,
    isSuccess: false,
  });

  return (
    <>
      <div className="contact-container">
        <div onClick={() => navigate(-1)}>
          <LeftArrow arrowClass="card-grid__arrow" />
        </div>
        {formValues.isSuccess ? (
          <div className="contact-text--success">
            <CheckCircleFillIcon />
            <h2>Gracias {formValues.name.value}</h2>
            <p className="card-grid__empty-message">Nos pondremos en contacto pronto por correo electrónico.</p>
          </div>
        ) : (
          <>
            <div className="contact-text">
              <h2 className="contact-text__h2">¿Quieres saber más?</h2>
              <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
            </div>

            <Formulario
              formValues={formValues}
              setFormValues={setFormValues}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Contacto;
