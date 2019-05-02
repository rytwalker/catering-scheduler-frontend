import React, { Component } from 'react';
import styled from 'styled-components';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from '../data/events';
import Modal from './Modal';
import CreateEventForm from './CreateEventForm';

const upcomingEvents = [...events];

// import Calendar from 'react-calendar';
const localizer = Calendar.momentLocalizer(moment);

class EventCalendar extends Component {
  state = {
    toggle: false,
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, 'days')),
        title: 'Some title'
      }
    ]
  };

  componentDidMount() {
    this.populateCalendar();
  }

  populateCalendar = () => {
    let events = upcomingEvents.map(event => ({
      start: new Date(event.date + 'T' + event.start_time + 'Z'),
      end: new Date(event.date + 'T' + event.end_time + 'Z'),
      title: event.title,
      allDay: event.guests > 200 ? true : false
    }));
    this.setState({ events: [...events] });
  };

  continue = () => {
    this.props.nextStep();
  };

  handleSelect = ({ start }) => {
    console.log(new Date(start).toISOString().split('T')[0]);
    this.setState({ toggle: true });
  };

  render() {
    return (
      <Container>
        <Calendar
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: '70vh' }}
          onSelectSlot={this.handleSelect}
        />
        {this.state.toggle && (
          <Modal>
            <CreateEventForm />
          </Modal>
        )}
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
