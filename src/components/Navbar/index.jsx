import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../contexts/TemeContext';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { preferredThemeColor } = useContext(ThemeContext);

  return (
    <nav style={{ backgroundColor: preferredThemeColor }}>
      <button type="button" onClick={() => navigate('/')} className="logo">
        EVENTIFY
      </button>
    </nav>

  );
};

export default Navbar;
