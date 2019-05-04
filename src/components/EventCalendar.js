import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from './Modal';
import EventDetailsForm from './EventDetailsForm';

const localizer = Calendar.momentLocalizer(moment);

function EventCalendar({ event, events, nextStep, handleChange }) {
  const [toggle, setToggle] = useState(false);

  const handleSelect = ({ start }) => {
    console.log(new Date(start).toISOString().split('T')[0]);
    // let date = new Date(start).toISOString().split('T')[0];
    // this.props.handleChange('event.date')(date);
    // this.setState({ toggle: true });

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
        onSelectSlot={handleSelect}
      />
      {toggle && (
        <Modal handleToggle={handleToggle}>
          <EventDetailsForm
            handleChange={handleChange}
            event={event}
            nextStep={nextStep}
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
