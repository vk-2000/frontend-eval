import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button type="button" onClick={() => navigate('/')} className="logo">
        EVENTIFY
      </button>
    </nav>

  );
};

export default Navbar;
