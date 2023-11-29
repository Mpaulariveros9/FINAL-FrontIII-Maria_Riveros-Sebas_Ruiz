// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';

const Navbar = () => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/favs">Favorites</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
