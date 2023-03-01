import React, { useEffect, useState } from 'react';
import { GET_ALL_EVENTS, UPDATE_EVENT } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import ControlPanel from '../ControlPanel';
import EventCard from '../EventCard';
import './AllEvents.css';

const AllEvents = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState(allEvents);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    makeRequest(GET_ALL_EVENTS).then((res) => {
      setAllEvents(res);
      setSelectedEvents(res);
    });
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      const filteredEvents = allEvents.filter(
        (event) => (
          event.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      );
      setSelectedEvents(filteredEvents);
    } else if (filter === 'registered') {
      const registeredEvents = allEvents.filter(
        (event) => (
          event.isRegistered && event.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      );
      setSelectedEvents(registeredEvents);
    } else if (filter === 'bookmarked') {
      const bookmarkedEvents = allEvents.filter(
        (event) => (
          event.isBookmarked && event.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      );
      setSelectedEvents(bookmarkedEvents);
    } else if (filter === 'seats') {
      const seatsEvents = allEvents.filter(
        (event) => (
          event.areSeatsAvailable && event.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      );
      setSelectedEvents(seatsEvents);
    }
  }, [searchTerm, filter, allEvents]);

  const handleBookmarkChange = (eventId, isBookmarked) => {
    makeRequest(UPDATE_EVENT(eventId), {
      data: {
        isBookmarked,
      },
    }).then(() => {
      const updatedEvents = allEvents.map((event) => {
        if (event.id === eventId) {
          return {
            ...event,
            isBookmarked: !event.isBookmarked,
          };
        }
        return event;
      });
      setAllEvents(updatedEvents);
    });
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <div className="all-events-body">
      <div className="control-panel">
        <ControlPanel onSearchChange={handleSearch} onFilterChange={handleFilterChange} />
      </div>
      <div className="all-events-container">
        {selectedEvents.map((event) => (
          <EventCard key={event.id} event={event} handleBookmarkChange={handleBookmarkChange} />
        ))}
      </div>
    </div>

  );
};

export default AllEvents;
