import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleChangeTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const navStyle = {
    backgroundColor: state.theme === 'light' ? '#f0f0f0' : '#333',
    color: state.theme === 'light' ? '#333' : '#f0f0f0',
  };

  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/Contact">Contacto</Link>
      <Link to="/Favs">Favoritos</Link>
      <button onClick={handleChangeTheme}>Cambiar tema</button>
    </nav>
  );
};

export default Navbar;
