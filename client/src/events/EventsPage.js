import React from 'react';
import { Route } from 'react-router-dom';
import EventList from './EventList';

const EventsPage = ({match, events}) => (

  <div>
    Here are the events
    <EventList />
  </div>
)

export default EventsPage;
