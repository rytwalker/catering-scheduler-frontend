import React, { Component } from 'react';
import Calendar from 'react-calendar';

class EventCalendar extends Component {
  continue = () => {
    this.props.nextStep();
  };
  render() {
    return (
      <div>
        <Calendar />
        <button onClick={this.continue}>Next</button>
      </div>
    );
  }
}

export default EventCalendar;
