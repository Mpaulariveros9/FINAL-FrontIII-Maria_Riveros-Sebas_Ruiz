// ThemeContext.jsx
import React, { createContext, useReducer, useContext } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(themeReducer, { isDarkMode: false });

  const toggleTheme = () => {
    themeDispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <ThemeContext.Provider value={{ themeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser utilizado dentro de un ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
