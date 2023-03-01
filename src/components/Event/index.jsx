import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GET_EVENT_BY_ID, UPDATE_EVENT } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import EventCard from '../EventCard';
import './Event.css';

const Event = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  useEffect(() => {
    makeRequest(GET_EVENT_BY_ID(id)).then((res) => {
      setEvent(res);
    });
  }, []);

  const handleBookmarkChange = (eventId, isBookmarked) => {
    makeRequest(UPDATE_EVENT(eventId), {
      data: {
        isBookmarked,
      },
    }).then(() => {
      setEvent({
        ...event,
        isBookmarked,
      });
    });
  };

  const handleRegistrationChange = () => {
    makeRequest(UPDATE_EVENT(event.id), {
      data: {
        isRegistered: !event.isRegistered,
      },
    }).then(() => {
      setEvent({
        ...event,
        isRegistered: !event.isRegistered,
      });
    });
  };
  return (
    <div className="event-container">
      <EventCard
        event={event}
        handleRegistrationChange={handleRegistrationChange}
        handleBookmarkChange={handleBookmarkChange}
        allowRegistration
      />
    </div>

  );
};

export default Event;

Event.propTypes = {
  event: PropTypes.shape({
    isRegistered: PropTypes.bool.isRequired,
  }).isRequired,
};
