import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../context/AppContext';

const DentistDetail = () => {
  const { state } = useContext(ThemeContext);
  const { apiData } = state;
  const { id } = useParams();

  // Encuentra el dentista correspondiente según el ID
  const selectedDentist = apiData.find((dentist) => dentist.id === parseInt(id));

  return (
    <div className={`dentist-detail ${state.theme}`}>
      {selectedDentist && (
        <div>
          <h1>{selectedDentist.name}</h1>
          <p>Email: {selectedDentist.email}</p>
          <p>Teléfono: {selectedDentist.phone}</p>
          <p>Website: {selectedDentist.website}</p>
        </div>
      )}
    </div>
  );
};

export default DentistDetail;
