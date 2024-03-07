import React, { createContext, useContext, useState, useMemo } from 'react';

const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const setLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const value = useMemo(() => ({ selectedLanguage, setLanguage }), [selectedLanguage]);

  return (
    <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
