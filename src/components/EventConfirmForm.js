import React from 'react';
import styled from 'styled-components';
import {
  FauxForm,
  FormGroup,
  FormLabel,
  DisabledTextInput,
  ButtonGroup,
  FormButton,
  LocationInputGroup,
  DateInputGroup
} from 'elements';

function EventDetailsForm({ event, handleChange, nextStep, prevStep, user }) {
  return (
    <FauxForm>
      <SectionHeading>
        Event Details <button>{'(edit)'}</button>
      </SectionHeading>
      <FormGroup>
        <FormLabel htmlFor="title">Event Name:</FormLabel>
        <DisabledTextInput
          disabled
          type="text"
          name="title"
          id="title"
          defaultValue={event.title}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="location">Location:</FormLabel>
        <DisabledTextInput
          disabled
          type="text"
          name="location"
          id="location"
          onChange={handleChange('event.location')}
          defaultValue={event.location}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="address">Address:</FormLabel>
        <DisabledTextInput
          disabled
          type="text"
          name="address"
          id="address"
          onChange={handleChange('event.address')}
          defaultValue={event.address}
        />
      </FormGroup>
      <LocationInputGroup>
        <FormGroup>
          <FormLabel htmlFor="city">City:</FormLabel>
          <DisabledTextInput
            disabled
            type="text"
            name="city"
            id="city"
            onChange={handleChange('event.city')}
            defaultValue={event.city}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="state">State:</FormLabel>
          <DisabledTextInput
            disabled
            type="text"
            name="state"
            id="state"
            onChange={handleChange('event.state')}
            defaultValue={event.state}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="zipcode">Zip:</FormLabel>
          <DisabledTextInput
            disabled
            type="text"
            name="zipcode"
            id="zipcode"
            onChange={handleChange('event.zipcode')}
            defaultValue={event.zipcode}
          />
        </FormGroup>
      </LocationInputGroup>
      <DateInputGroup>
        <FormGroup>
          <FormLabel htmlFor="date">Date:</FormLabel>
          <DisabledTextInput
            disabled
            type="date"
            name="date"
            id="date"
            onChange={handleChange('event.date')}
            defaultValue={event.date}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="start_time">Start Time:</FormLabel>
          <DisabledTextInput
            disabled
            type="time"
            name="start_time"
            id="start_time"
            onChange={handleChange('event.start_time')}
            defaultValue={event.start_time}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="end_time">End Time:</FormLabel>
          <DisabledTextInput
            disabled
            type="time"
            name="end_time"
            id="end_time"
            onChange={handleChange('event.end_time')}
            defaultValue={event.end_time}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="number_of_guests">Guests:</FormLabel>
          <DisabledTextInput
            disabled
            type="number"
            name="number_of_guests"
            id="number_of_guests"
            onChange={handleChange('event.guests')}
            defaultValue={event.guests}
          />
        </FormGroup>
      </DateInputGroup>
      <SectionHeading>
        Contact Info <button>{'(edit)'}</button>
      </SectionHeading>
      <FormGroup>
        <FormLabel htmlFor="first_name">First Name:</FormLabel>
        <DisabledTextInput
          disabled
          type="text"
          name="first_name"
          id="first_name"
          onChange={handleChange('user.first_name')}
          defaultValue={user.first_name}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="last_name">Last Name:</FormLabel>
        <DisabledTextInput
          disabled
          type="text"
          name="last_name"
          id="last_name"
          onChange={handleChange('user.last_name')}
          defaultValue={user.last_name}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">Email:</FormLabel>
        <DisabledTextInput
          disabled
          type="text"
          name="email"
          id="email"
          onChange={handleChange('user.email')}
          defaultValue={user.email}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="phone">Phone:</FormLabel>
        <DisabledTextInput
          disabled
          type="text"
          name="phone"
          id="phone"
          onChange={handleChange('user.phone')}
          defaultValue={user.phone}
        />
      </FormGroup>
      <SectionHeading>
        Menu <button>{'(edit)'}</button>
      </SectionHeading>
      <ButtonGroup>
        <FormButton onClick={prevStep}>Back</FormButton>
      </ButtonGroup>
    </FauxForm>
  );
}

const SectionHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  button {
    cursor: pointer;
    border: none;
    margin-left: 0.5rem;
    color: #9fbdef;
  }
`;

export default EventDetailsForm;
