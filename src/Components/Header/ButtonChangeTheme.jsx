import React from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export const ButtonChangeTheme = () => {
  const {
    changeTheme,
    state: { isDarkMode },
  } = useAppContext();

  return (
    <button
      className="menu-modal__theme-button"
      onClick={changeTheme}
      aria-label="ButtonChangeTheme"
    >
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
    </button>
  );
};
