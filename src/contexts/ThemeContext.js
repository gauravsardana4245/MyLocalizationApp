import React, { createContext, useContext, useState, useMemo } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const value = useMemo(() => ({ theme: isDarkMode ? darkTheme : lightTheme, toggleTheme }), [
    isDarkMode,
  ]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const lightTheme = {
    name: "light",
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
  buttonColor: "orange",
};

const darkTheme = {
    name: "dark",
  backgroundColor: '#000000',
  textColor: '#FFFFFF',
  buttonColor: "orange",
};
