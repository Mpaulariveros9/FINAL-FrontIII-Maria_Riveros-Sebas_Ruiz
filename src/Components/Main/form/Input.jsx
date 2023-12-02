import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const Input = ({ inputClass, onChange, type, id, name, value, placeholder, onBlur, isErrors }) => {
  const icon = isErrors !== null && isErrors ? <FontAwesomeIcon icon={faTimesCircle} /> : <FontAwesomeIcon icon={faCheckCircle} />;
  return (
    <>
      <div className="input-container">
        <input
          className={inputClass}
          onChange={onChange}
          type={type}
          id={id}
          name={name}
          autoComplete="off"
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
        />
        {isErrors !== null ? icon : ''}
      </div>
    </>
  );
};
