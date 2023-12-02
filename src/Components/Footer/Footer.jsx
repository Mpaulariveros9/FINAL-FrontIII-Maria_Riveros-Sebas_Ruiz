import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/img/DH.ico';

export const Footer = ({ themeClass }) => {
  return (
    <footer className={`footer ${themeClass}`}>
       {/* Enlace a la página web de Digital House */}
      
      <a
        className="footer__dh-link"
        href="https://www.digitalhouse.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{ width: '40px', marginLeft: '10px', height: '40px' }}
          src={logo}
          alt="DH.ico"
        />
      </a>

      <p className="footer__p">Desarrollado por Maria Paula Riveros y Sebastian Ruiz</p>
      
      {/* Iconos de redes sociales */}
      <div className={`${themeClass} icons__footer`} >
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      
    </footer>
  );
};
