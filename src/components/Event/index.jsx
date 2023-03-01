import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_EVENT_BY_ID } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import EventCard from '../EventCard';

const Event = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  useEffect(() => {
    makeRequest(GET_EVENT_BY_ID(id)).then((res) => {
      console.log(res);
      setEvent(res);
    });
  }, []);
  return (
    <div>
      <EventCard event={event} />
    </div>

  );
};

export default Event;
