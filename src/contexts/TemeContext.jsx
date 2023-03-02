/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { GET_THEMES, UPDATE_THEME } from '../constants/apiEndPoints';
import makeRequest from '../utils/makeRequest';

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [preferredThemeColor, setPreferredThemeColor] = useState('#000000');
  const [themes, setThemes] = useState();
  useEffect(() => {
    makeRequest(GET_THEMES).then((res) => {
      setThemes(res);
      setPreferredThemeColor(res.themes.find(
        (theme) => theme.id === res.preferredThemeId,
      ).colorHexCode);
    });
  }, []);

  const saveSelectedTheme = () => {
    const selectedTheme = themes.themes.find((theme) => theme.colorHexCode === preferredThemeColor);
    makeRequest(UPDATE_THEME, {
      data: {
        preferredThemeId: selectedTheme.id,
      },
    }).then((res) => { console.log(res); });
  };

  return (
    <ThemeContext.Provider value={{
      preferredThemeColor, themes, setPreferredThemeColor, saveSelectedTheme,
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
