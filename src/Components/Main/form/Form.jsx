import React from 'react';
import { useAppContext, useForm } from '../../../hooks';
import { Input, Label } from '.';

const Form = ({ formValues, setFormValues }) => {
  const {
    state: { isDarkMode },
  } = useAppContext();
  const submitInputThemeClass = isDarkMode ? 'mainDark' : 'mainLight';
  const formThemeClass = isDarkMode ? 'dark' : 'light';

  const { onInputChange, onInputBlur, onFormSubmit } = useForm({ formValues, setFormValues });

  return (
    <form
      className={`form ${formThemeClass}`}
      onSubmit={onFormSubmit}
    >
      <fieldset className="form__fieldset">
        <legend className="form__legend">Información de Contacto</legend>
        <Label
          labelClass="form__label"
          htmlFor="name"
          text="Nombre"
        />
        <Input
          inputClass={`form__input ${formValues.name.validationClass}`}
          onChange={onInputChange}
          type="text"
          id="name"
          name="name"
          value={formValues.name.value}
          placeholder="Pepito Perez"
          onBlur={onInputBlur}
          isErrors={formValues.name.errors}
        />
        {formValues.name.errors && <span className="form__error-message--input">{formValues.name.errors}</span>}

        <Label
          labelClass="form__label"
          htmlFor="email"
          text="Correo Electronico"
        />
        <Input
          inputClass={`form__input ${formValues.email.validationClass}`}
          onChange={onInputChange}
          type="email"
          id="email"
          name="email"
          value={formValues.email.value}
          placeholder="xxxxxxxxx@xxxxx.com"
          onBlur={onInputBlur}
          isErrors={formValues.email.errors}
        />
        {formValues.email.errors && <span className="form__error-message--input">{formValues.email.errors}</span>}
      </fieldset>
      <Input
        inputClass={`${submitInputThemeClass} form__submit`}
        type="submit"
        value="Submit"
        isErrors={null}
        isFormValid={formValues.isFormValid}
      />

      {formValues.isFormSubmitted && !formValues.isSuccess && (
        <span className="form__error-message">Por favor revisa tu información de nuevo.</span>
      )}

    </form>

    
  );
};

export default Form;
