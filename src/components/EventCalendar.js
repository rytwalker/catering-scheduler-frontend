import React, { useState, useEffect } from 'react';
import { useEvent, ComponentContext } from '../context/event-context';
import styled from 'styled-components';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './EventCalendar.css';
import Modal from './Modal';
import EventDetailsForm from './EventDetailsForm';
import eventsData from '../data/events';
const upcomingEvents = [...eventsData];

const localizer = Calendar.momentLocalizer(moment);

function EventCalendar() {
  const [toggle, setToggle] = useState(false);
  const [state, dispatch] = useEvent(ComponentContext);
  const { events } = state;
  useEffect(() => {
    populateCalendar();
    // let isFormValid = true;
    // for (let field in event) {
    //   if (event[field].length === 0) {
    //     isFormValid = false;
    //   }
    // }

    // if (isFormValid) {
    //   setToggle(true);
    // }
  }, []);

  const populateCalendar = () => {
    let events = upcomingEvents.map(event => ({
      start: new Date(event.date + 'T' + event.start_time + 'Z'),
      end: new Date(event.date + 'T' + event.end_time + 'Z'),
      title: event.title,
      allDay: event.guests > 200 ? true : false
    }));
    dispatch({ type: 'GET_EVENTS', payload: events });
  };

  const setDate = date => dispatch({ type: 'SET_DATE', payload: date });

  const handleSelect = event => {
    if (event.slots.length > 1) {
      return;
    }
    let date = new Date(event.start).toISOString().split('T')[0];
    setDate(date);
    setToggle(true);
  };

  const handleToggle = () => setToggle(!toggle);

  return (
    <Container>
      <Calendar
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: '70vh' }}
        views={{ month: true }}
        onSelectSlot={handleSelect}
      />
      {toggle && (
        <Modal handleToggle={handleToggle}>
          <EventDetailsForm
          // event={event}
          // handleChange={handleChange}
          // nextStep={nextStep}
          // errors={errors}
          // addError={addError}
          />
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: 80vh;
  background: #fff;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export default EventCalendar;
