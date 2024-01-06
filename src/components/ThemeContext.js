// ThemeContext.js
import React, { createContext, useContext, useState, useCallback } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  }, []);

  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';

  const themeStyles = {
    '--background-color': isDarkTheme ? '#333' : '#fff',
    '--text-color': isDarkTheme ? '#fff' : '#333',
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, themeClass, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
