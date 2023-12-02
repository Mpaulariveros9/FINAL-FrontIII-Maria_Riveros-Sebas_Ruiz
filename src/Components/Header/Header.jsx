import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import { Menu, Navbar } from './';
import '../../css/Header.css';

export const Header = ({ themeClass }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={`${themeClass} header`}>
      <FontAwesomeIcon icon={faTooth} className="header__tooth-icon" />
      <h1
        className="header__h1"
        onClick={() => navigate('/')}
        aria-label="h1"
      >
        DH Odonto
      </h1>
      <Navbar />
      <button
        className="header__button"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
      </button>

      {isModalOpen && (
        <Menu
          themeClass={themeClass}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </header>
  );
};
