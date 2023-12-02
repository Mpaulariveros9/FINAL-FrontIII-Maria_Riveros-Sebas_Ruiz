import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import Form from '../Components/Main/form/Form.jsx';
import Oral from '../assets/Oral-care-pana.png';

const Contact = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = React.useState({
    name: { value: '', errors: null, validationClass: '' },
    email: { value: '', errors: null, validationClass: '' },
    isFormSubmitted: false,
    isSuccess: false,
  });

  return (
    <>
      <div className="contact-container">
        <div onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowRight} className="card-grid__arrow" />
        </div>
        {formValues.isSuccess ? (
          <div className="contact-text--success">
            <FontAwesomeIcon icon={faCheckCircle} />
            <h2>Thanks {formValues.name.value}</h2>
            <p className="card-grid__empty-message">Nos contactaremos pronto contigo</p>
          </div>
        ) : (
          <>
            <div className="contact-text">
              <h3 className="contact-text__h2">¿Quieres saber cúal es tu odontologo ideal?</h3>
              <p>Por favor completa el formulario para ser contactado</p>
            </div>

            <Form formValues={formValues} setFormValues={setFormValues} />
          </>
        )}

        
      </div>

      <div className="contact-image-container">
          <img 
          style={{ width: '450px' }}
          src={Oral} 
          alt="Contact" />
      </div>
    </>
  );
};

export default Contact;
