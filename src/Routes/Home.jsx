import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/AppContext';

const Home = () => {
  const { state } = useContext(ThemeContext);
  const { apiData } = state;

  useEffect(() => {
    // Lógica para obtener la información de la API al cargar la página
    // Puedes utilizar fetch o axios para realizar la llamada a la API
  }, []);

  return (
    <div className={`home ${state.theme}`}>
      <h1>Lista de Dentistas</h1>
      <div className="dentist-list">
        {apiData &&
          apiData.map((dentist) => (
            <div key={dentist.id} className="dentist-card">
              <Link to={`/dentist/${dentist.id}`}>
                <h2>{dentist.name}</h2>
                <p>{dentist.email}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
