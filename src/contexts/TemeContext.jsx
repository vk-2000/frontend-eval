/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { GET_THEMES } from '../constants/apiEndPoints';
import makeRequest from '../utils/makeRequest';

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    themes: [
      {
        id: 1,
        colorHexCode: '#000000',
      },
      {
        id: 2,
        colorHexCode: '#800080',
      },
      {
        id: 3,
        colorHexCode: '#0000FF',
      },
      {
        id: 4,
        colorHexCode: '#9B9999',
      },
    ],
    preferredThemeId: 2,
  });
  useEffect(() => {
    makeRequest(GET_THEMES).then((res) => {
      setTheme(res);
    });
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
