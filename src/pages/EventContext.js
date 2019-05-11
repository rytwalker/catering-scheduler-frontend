import React from 'react';
import { EventProvider } from '../context/event-context';
import ContextEventDetails from '../components/ContextEventDetails';

const EventWithContext = () => {
  return (
    <EventProvider>
      <ContextEventDetails />
    </EventProvider>
  );
};

export default EventWithContext;
