import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Favorites = () => {
  const { state } = useContext(ThemeContext);
  // Lógica para obtener dentistas destacados del localStorage

  return (
    <div className={`favorites ${state.theme}`}>
      <h1>Dentistas Destacados</h1>
      <div className="favorites-list">
        {/* Renderiza las cards de dentistas destacados aquí */}
      </div>
    </div>
  );
};

export default Favorites;
