import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';
import { ButtonChangeTheme } from './ButtonChangeTheme';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/home">
        <FontAwesomeIcon icon={faHome} />
          Home
      </NavLink>
      <NavLink to="/contact">
        <FontAwesomeIcon icon={faEnvelope} />
          Contacto
      </NavLink>
      <NavLink to="/favs">
        <FontAwesomeIcon icon={faStar} />
          Favoritos
      </NavLink>
      <ButtonChangeTheme />
    </nav>
  );
};
