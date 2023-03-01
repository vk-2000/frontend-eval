import React from 'react';
import xMarkIcon from '../../assets/icons/circle-xmark-solid.svg';
import './NoSeatsAvailable.css';

const NoSeatsAvailable = () => (
  <div className="no-seats-body">
    <img src={xMarkIcon} alt="wrong-icon" className="img-wrong" />
    No seats available
  </div>
);

export default NoSeatsAvailable;
