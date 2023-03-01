import React from 'react';
import PropTypes from 'prop-types';
import './EventCard.css';
import Bookmark from '../Bookmark';
import Registered from '../Registered';
import NoSeatsAvailable from '../NoSeatsAvailable';

const EventCard = ({ event, handleBookmarkChange }) => {
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
  return (
    <div className="event-card">
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
        {event.datetime}
      </div>
      <div className="event-info">
        <div className="event-availablity">
          {getInfo()}
        </div>
        <div className="event-bookmard">
          <Bookmark isBookmarked={event.isBookmarked} onChange={handleChangeInBookmark} />
        </div>

      </div>
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

};

export default EventCard;
