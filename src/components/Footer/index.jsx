import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/TemeContext';
import './Footer.css';

const Footer = () => {
  const {
    themes, setPreferredThemeColor, preferredThemeColor, saveSelectedTheme,
  } = useContext(ThemeContext);
  const [isThemeChanged, setIsThemeChanged] = useState(false);
  return (
    <footer style={{ backgroundColor: preferredThemeColor }}>
      {(!themes) ? <div>Loading...</div> : (
        <div className="themes-container">
          {themes.themes.map((theme) => {
            const { id, colorHexCode } = theme;
            return (

              <button
                type="button"
                className="btn-theme"
                key={id}
                onClick={() => {
                  setIsThemeChanged(true);
                  setPreferredThemeColor(colorHexCode);
                }}
                style={{ backgroundColor: colorHexCode }}
              >
                {' '}
              </button>
            );
          }) }
        </div>
      ) }

      <div className="btn-save-container">
        {isThemeChanged && (
        <button
          onClick={() => {
            saveSelectedTheme();
            setIsThemeChanged(false);
          }}
          className="btn-save"
          type="button"
        >
          Save

        </button>
        )}
      </div>
    </footer>

  );
};

export default Footer;
