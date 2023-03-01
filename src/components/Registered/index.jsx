import React from 'react';
import registeredIcon from '../../assets/icons/circle-check-solid.svg';
import './Registered.css';

const Registered = () => (
  <div className="registered-body">
    <img src={registeredIcon} alt="check-icon" className="img-check" />
    Registered
  </div>
);

export default Registered;
