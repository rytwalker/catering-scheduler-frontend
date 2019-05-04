import React from 'react';
import {
  FauxForm,
  FormGroup,
  FormLabel,
  TextInput,
  ButtonGroup,
  FormButton,
  LocationInputGroup,
  DateInputGroup,
  StepHeading
} from 'elements';

function EventDetailsForm({ event, handleChange, nextStep }) {
  return (
    <FauxForm>
      <StepHeading>
        Step 1 (Continued): <span>Fill out event details</span>
      </StepHeading>
      <FormGroup>
        <FormLabel htmlFor="title">Event Name:</FormLabel>
        <TextInput
          type="text"
          name="title"
          id="title"
          onChange={handleChange('event.title')}
          defaultValue={event.title}
          placeholder="Graduation Party"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="location">Location:</FormLabel>
        <TextInput
          type="text"
          name="location"
          id="location"
          onChange={handleChange('event.location')}
          defaultValue={event.location}
          placeholder="Boardman Park"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="address">Address:</FormLabel>
        <TextInput
          type="text"
          name="address"
          id="address"
          onChange={handleChange('event.address')}
          defaultValue={event.address}
          placeholder="123 Green Ave."
        />
      </FormGroup>
      <LocationInputGroup>
        <FormGroup>
          <FormLabel htmlFor="city">City:</FormLabel>
          <TextInput
            type="text"
            name="city"
            id="city"
            onChange={handleChange('event.city')}
            defaultValue={event.city}
            placeholder="Boardman"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="state">State:</FormLabel>
          <TextInput
            type="text"
            name="state"
            id="state"
            onChange={handleChange('event.state')}
            defaultValue={event.state}
            placeholder="Ohio"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="zipcode">Zip:</FormLabel>
          <TextInput
            type="text"
            name="zipcode"
            id="zipcode"
            onChange={handleChange('event.zipcode')}
            defaultValue={event.zipcode}
            placeholder="44512"
          />
        </FormGroup>
      </LocationInputGroup>
      <DateInputGroup>
        <FormGroup>
          <FormLabel htmlFor="date">Date:</FormLabel>
          <TextInput
            type="date"
            name="date"
            id="date"
            onChange={handleChange('event.date')}
            defaultValue={event.date}
            // placeholder="$200.50"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="start_time">Start Time:</FormLabel>
          <TextInput
            type="time"
            name="start_time"
            id="start_time"
            onChange={handleChange('event.start_time')}
            defaultValue={event.start_time}
            placeholder="7:00pm"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="end_time">End Time:</FormLabel>
          <TextInput
            type="time"
            name="end_time"
            id="end_time"
            onChange={handleChange('event.end_time')}
            defaultValue={event.end_time}
            placeholder="7:00pm"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="number_of_guests">Guests:</FormLabel>
          <TextInput
            type="number"
            name="number_of_guests"
            id="number_of_guests"
            onChange={handleChange('event.guests')}
            defaultValue={event.guests}
            placeholder="100"
          />
        </FormGroup>
      </DateInputGroup>
      <ButtonGroup>
        <FormButton onClick={nextStep}>Next</FormButton>
      </ButtonGroup>
    </FauxForm>
  );
}

export default EventDetailsForm;
