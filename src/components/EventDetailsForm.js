import React from 'react';
import styled from 'styled-components';

function EventDetailsForm({ event, handleChange, nextStep }) {
  return (
    <StyledEventDetailsForm>
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
      <LocationFormGroup>
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
      </LocationFormGroup>
      <DateFormGroup>
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
      </DateFormGroup>
      <ButtonGroup>
        <FormButton onClick={nextStep}>Next</FormButton>
      </ButtonGroup>
    </StyledEventDetailsForm>
  );
}

const StyledEventDetailsForm = styled.div`
  /* width: 800px; */
  background: #fff;
  border: 1px solid #fafafa;
  border-radius: 5px;
  padding: 3rem;
  overflow: scroll;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const LocationFormGroup = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-column-gap: 2rem;
`;

const DateFormGroup = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
`;

const FormLabel = styled.label`
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const TextInput = styled.input`
  border-radius: 5px;
  border: 1px solid #4f4f4f;
  font-size: inherit;
  padding: 1rem 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormButton = styled.button`
  background: #9fbdef;
  color: #fff;
  font-weight: 400;
  font-size: inherit;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  border: transparent;
  cursor: pointer;
`;

export default EventDetailsForm;
