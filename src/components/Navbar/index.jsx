import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../contexts/TemeContext';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState({
    colorHexCode: '#800080',
  });
  useEffect(() => {
    const selected = theme.themes.findIndex((t) => t.id === theme.preferredThemeId);
    setSelectedTheme(theme.themes[selected]);
  }, [theme]);
  return (
    <nav style={{ backgroundColor: selectedTheme.colorHexCode }}>
      <button type="button" onClick={() => navigate('/')} className="logo">
        EVENTIFY
      </button>
    </nav>

  );
};

export default Navbar;
