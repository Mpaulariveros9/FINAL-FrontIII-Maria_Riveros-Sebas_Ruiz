// FavoritesContext.jsx
import React, { createContext, useReducer, useContext } from 'react';

const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    default:
      return state;
  }
};

const FavoritesProvider = ({ children }) => {
  const [favorites, favoritesDispatch] = useReducer(favoritesReducer, []);

  const addFavorite = (dentist) => {
    favoritesDispatch({ type: 'ADD_FAVORITE', payload: dentist });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe ser utilizado dentro de un FavoritesProvider');
  }
  return context;
};

export { FavoritesProvider, useFavorites };
