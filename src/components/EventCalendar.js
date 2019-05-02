import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// import Calendar from 'react-calendar';
const localizer = Calendar.momentLocalizer(moment);

class EventCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, 'days')),
        title: 'Some title'
      }
    ]
  };
  continue = () => {
    this.props.nextStep();
  };
  render() {
    return (
      <Container>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: '70vh' }}
        />
        <button onClick={this.continue}>Next</button>
      </Container>
    );
  }
}

const Container = styled.div`
  min-height: 80vh;
  background: #fff;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export default EventCalendar;
