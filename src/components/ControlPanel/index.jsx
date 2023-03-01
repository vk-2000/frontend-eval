/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './ControlPanel.css';
import PropTypes from 'prop-types';
import searchIcon from '../../assets/icons/magnifying-glass-solid.svg';
import filterIcon from '../../assets/icons/filter-solid.svg';
import chevronUp from '../../assets/icons/chevron-up-solid.svg';

const ControlPanel = ({ onSearchChange, onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(true);
  return (
    <div className="control-panel-body">
      <div className="filter-search">
        <div onClick={() => setShowFilters(!showFilters)} className="filter-icon">
          <img src={filterIcon} alt="" />
          <span>Filter</span>
          <img src={chevronUp} alt="" />
        </div>
        <div className="search-bar">
          <input onChange={(e) => onSearchChange(e)} type="text" placeholder="EVENT NAME" />
          <img src={searchIcon} alt="" />
        </div>
      </div>
      {
        showFilters && (
        <div className="filter-body">
          <label htmlFor="all">
            <input onClick={(e) => onFilterChange(e)} type="radio" id="all" name="filter" value="all" />
            ALL
          </label>
          <label htmlFor="registered">
            <input onClick={(e) => onFilterChange(e)} type="radio" id="registered" name="filter" value="registered" />
            REGISTERED
          </label>
          <label htmlFor="bookmarked">
            <input onClick={(e) => onFilterChange(e)} type="radio" id="bookmarked" name="filter" value="bookmarked" />
            BOOKMARKED
          </label>
          <label htmlFor="seats">
            <input onClick={(e) => onFilterChange(e)} type="radio" id="seats" name="filter" value="seats" />
            SEATS AVAILABLE
          </label>
        </div>
        )
      }

    </div>
  );
};

export default ControlPanel;

ControlPanel.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
