import React from 'react';
import styled from 'styled-components';

function EventDetailsForm({ event, handleChange, nextStep, prevStep, user }) {
  return (
    <StyledEventDetailsForm>
      <SectionHeading>
        Event Details <button>{'(edit)'}</button>
      </SectionHeading>
      <FormGroup>
        <FormLabel htmlFor="title">Event Name:</FormLabel>
        <TextInput
          disabled
          type="text"
          name="title"
          id="title"
          defaultValue={event.title}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="location">Location:</FormLabel>
        <TextInput
          disabled
          type="text"
          name="location"
          id="location"
          onChange={handleChange('event.location')}
          defaultValue={event.location}
          //   placeholder="Boardman Park"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="address">Address:</FormLabel>
        <TextInput
          disabled
          type="text"
          name="address"
          id="address"
          onChange={handleChange('event.address')}
          defaultValue={event.address}
          //   placeholder="123 Green Ave."
        />
      </FormGroup>
      <LocationFormGroup>
        <FormGroup>
          <FormLabel htmlFor="city">City:</FormLabel>
          <TextInput
            disabled
            type="text"
            name="city"
            id="city"
            onChange={handleChange('event.city')}
            defaultValue={event.city}
            // placeholder="Boardman"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="state">State:</FormLabel>
          <TextInput
            disabled
            type="text"
            name="state"
            id="state"
            onChange={handleChange('event.state')}
            defaultValue={event.state}
            // placeholder="Ohio"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="zipcode">Zip:</FormLabel>
          <TextInput
            disabled
            type="text"
            name="zipcode"
            id="zipcode"
            onChange={handleChange('event.zipcode')}
            defaultValue={event.zipcode}
            // placeholder="44512"
          />
        </FormGroup>
      </LocationFormGroup>
      <DateFormGroup>
        <FormGroup>
          <FormLabel htmlFor="date">Date:</FormLabel>
          <TextInput
            disabled
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
            disabled
            type="time"
            name="start_time"
            id="start_time"
            onChange={handleChange('event.start_time')}
            defaultValue={event.start_time}
            // placeholder="7:00pm"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="end_time">End Time:</FormLabel>
          <TextInput
            disabled
            type="time"
            name="end_time"
            id="end_time"
            onChange={handleChange('event.end_time')}
            defaultValue={event.end_time}
            // placeholder="7:00pm"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="number_of_guests">Guests:</FormLabel>
          <TextInput
            disabled
            type="number"
            name="number_of_guests"
            id="number_of_guests"
            onChange={handleChange('event.guests')}
            defaultValue={event.guests}
            // placeholder="100"
          />
        </FormGroup>
      </DateFormGroup>
      <SectionHeading>
        Contact Info <button>{'(edit)'}</button>
      </SectionHeading>
      <FormGroup>
        <FormLabel htmlFor="first_name">First Name:</FormLabel>
        <TextInput
          disabled
          type="text"
          name="first_name"
          id="first_name"
          onChange={handleChange('user.first_name')}
          defaultValue={user.first_name}
          //   placeholder="First Name"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="last_name">Last Name:</FormLabel>
        <TextInput
          disabled
          type="text"
          name="last_name"
          id="last_name"
          onChange={handleChange('user.last_name')}
          defaultValue={user.last_name}
          //   placeholder="Last Name"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">Email:</FormLabel>
        <TextInput
          disabled
          type="text"
          name="email"
          id="email"
          onChange={handleChange('user.email')}
          defaultValue={user.email}
          //   placeholder="email@email.com"
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="phone">Phone:</FormLabel>
        <TextInput
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
    </StyledEventDetailsForm>
  );
}

const StyledEventDetailsForm = styled.div`
  /* width: 800px; */
  background: #fff;
  border: 1px solid #fafafa;
  border-radius: 5px;
  padding: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

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
  /* border-radius: 5px; */
  border: 1px solid transparent;
  border-bottom: 1px solid #4f4f4f;
  font-size: inherit;
  padding: 1rem 0.5rem;
  font-family: inherit;
  font-weight: 700;
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
