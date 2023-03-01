export const BACKEND_URL = 'http://localhost:8000/api/';

export const GET_ALL_EVENTS = {
  url: 'events',
  method: 'get',
};

export const UPDATE_EVENT = (id) => ({
  url: `events/${id}`,
  method: 'patch',
});

export const GET_EVENT_BY_ID = (id) => ({
  url: `events/${id}`,
  method: 'get',
});

export const GET_THEMES = {
  url: 'themes',
  method: 'get',
};
