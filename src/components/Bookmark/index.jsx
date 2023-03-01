import React from 'react';
import PropTypes from 'prop-types';
import solidBookmark from '../../assets/icons/bookmark-solid.svg';
import regularBookmark from '../../assets/icons/bookmark-regular.svg';
import './Bookmark.css';

const Bookmark = ({ isBookmarked, onChange }) => (
  <button data-testid="btn-bookmark" onClick={(e) => { e.stopPropagation(); onChange(); }} type="button">
    <img src={isBookmarked ? solidBookmark : regularBookmark} alt="bookmark" />
  </button>
);

export default Bookmark;

Bookmark.propTypes = {
  isBookmarked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
