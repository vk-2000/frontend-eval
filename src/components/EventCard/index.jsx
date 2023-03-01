/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import './EventCard.css';
import { useNavigate } from 'react-router-dom';
import Bookmark from '../Bookmark';
import Registered from '../Registered';
import NoSeatsAvailable from '../NoSeatsAvailable';
import getTime from '../../utils/common';

const EventCard = ({
  event,
  handleBookmarkChange,
  allowRegistration,
  handleRegistrationChange,
}) => {
  const navigate = useNavigate();
  const handleChangeInBookmark = () => {
    handleBookmarkChange(event.id, !event.isBookmarked);
  };

  const getInfo = () => {
    if (event.isRegistered) {
      return (
        <Registered />
      );
    }

    if (!event.areSeatsAvailable) {
      return <NoSeatsAvailable />;
    }
    return <div />;
  };

  const getRegistration = () => {
    if (allowRegistration && event.areSeatsAvailable) {
      return <button className="btn-register" onClick={(e) => { e.stopPropagation(); handleRegistrationChange(); }} type="button">{event.isRegistered ? 'Unregister' : 'Register'}</button>;
    }
    return <div />;
  };

  return (
    <div onClick={() => navigate(`events/${event.id}`)} data-testid="event-card" className="event-card">
      <div className="event-img-container">
        <img src={event.imgUrl} alt={event.name} className="event-img" />
      </div>
      <div className="event-name">
        {event.name}
      </div>
      <div className="event-description">
        {event.description}
      </div>
      <div className="event-venue">
        VENUE:
        {' '}
        {event.venue}
      </div>
      <div className="event-date">
        DATE:
        {' '}
        {getTime(event.datetime)}
      </div>
      <div className="event-info">
        <div className="event-availablity">
          {getInfo()}
        </div>
        <div className="event-bookmard">
          <Bookmark isBookmarked={event.isBookmarked} onChange={handleChangeInBookmark} />
        </div>
      </div>
      {getRegistration()}

    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    isRegistered: PropTypes.bool.isRequired,
    areSeatsAvailable: PropTypes.bool.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
  }).isRequired,
  handleBookmarkChange: PropTypes.func.isRequired,
  handleRegistrationChange: PropTypes.func.isRequired,
  allowRegistration: PropTypes.bool.isRequired,

};

export default EventCard;
