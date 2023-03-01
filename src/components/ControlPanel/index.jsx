import React from 'react';
import './ControlPanel.css';
import PropTypes from 'prop-types';

const ControlPanel = ({ onSearchChange, onFilterChange }) => (
  <div className="control-panel-body">
    <div className="filter-search">
      <div className="filter-icon">
        Filter
      </div>
      <div className="search-bar">
        <input onChange={(e) => onSearchChange(e)} type="text" placeholder="search" />
      </div>
    </div>
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
      <label htmlFor="bookmarked">
        <input onClick={(e) => onFilterChange(e)} type="radio" id="seats" name="filter" value="seats" />
        SEATS AVAILABLE
      </label>
    </div>
  </div>
);

export default ControlPanel;

ControlPanel.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
