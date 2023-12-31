import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../Components/Main/card/Card';
import { GridCard } from '../Components/Main/skeleton/GridCard';
import { useAppContext } from '../hooks/useAppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { dentistId } = useParams();
  const {
    fetchSingleDentist,
    state: { data, isFetching },
  } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleDentist(dentistId);
  }, []);

  return (
    <div className="app__detail__card-grid">
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {isFetching ? (
        <GridCard />
      ) : (
        <Card
          data={data}
          onClick={null}
          textArray={[
            { field: 'Nombre', value: data.name },
            { field: 'Correo', value: data.email },
            { field: 'Telefono', value: data.phone },
            { field: 'Website', value: data.website },
          ]}
          cardClass="card--detail"
        />
      )}
    </div>
  );
};

export default Detail;
