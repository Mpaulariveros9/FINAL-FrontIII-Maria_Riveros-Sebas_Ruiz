import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonChangeTheme } from './ButtonChangeTheme';

export const Menu = ({ themeClass, setIsModalOpen }) => {
  const onLinkClick = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={`menu-modal ${themeClass}`}>
      <NavLink
        className={`${themeClass}`}
        to="/home"
        onClick={onLinkClick}
      >
         Home
      </NavLink>
      <NavLink
        className={`${themeClass}`}
        to="/contact"
        onClick={onLinkClick}
      >
         Contacto
      </NavLink>
      <NavLink
        className={`${themeClass}`}
        to="/favs"
        onClick={onLinkClick}
      >
         
      </NavLink>
      <ButtonChangeTheme />
    </div>
  );
};
