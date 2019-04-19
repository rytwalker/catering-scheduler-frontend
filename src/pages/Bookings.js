import React, { Component } from 'react';
import CreateEventForm from '../components/CreateEventForm';

class Bookings extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Book an Event With Us</h1>
        <CreateEventForm />
      </div>
    );
  }
}

export default Bookings;
