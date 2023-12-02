import React from 'react';
import { useAppContext } from '../../../hooks/useAppContext';
import doctorImg from '../../../assets/doctor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CardContent } from './CardContent';

function Card({ data, onClick, textArray, cardClass }) {
  const { id } = data || '';
  const {
    state: { isDarkMode, favorites },
    addFavorite,
    removeFavorite,
  } = useAppContext();

  const isFav = favorites.some((fav) => fav.id === id);

  const themeClass = isDarkMode ? 'dark' : 'light';

  const onFavButtonClick = (e) => {
    e.stopPropagation();

    if (!isFav) {
      addFavorite(data);
    } else {
      removeFavorite(id);
    }
  };

  return (
    <div
      className={`${cardClass} ${themeClass}`}
      onClick={onClick}
      aria-label="dentistCard"
    >
      <img className="card__image" src={doctorImg} alt="doctor" />

      <CardContent textArray={textArray} />

      <div className="card__options">
        <button onClick={onFavButtonClick} className={`card__fav-button ${isFav ? 'fav' : ''}`}>
          <FontAwesomeIcon icon={faHeart} className="fa-regular" />
        </button>

        <button onClick={onClick} className="card__details-button">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>

      </div>
    </div>
  );
}

export default Card;
