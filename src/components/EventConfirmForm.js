import React from 'react';
import { useEvent, ComponentContext } from '../context/event-context';
import styled from 'styled-components';
import {
  FauxForm,
  FormGroup,
  FormLabel,
  DisabledTextInput,
  LocationInputGroup,
  DateInputGroup
} from 'elements';

function EventDetailsForm() {
  const [state, dispatch] = useEvent(ComponentContext);
  const {
    errors,
    event,
    step,
    user,
    meats,
    sides,
    salads,
    breads,
    totalPrice
  } = state;

  const incrementStep = () => dispatch({ type: 'INCREMENT_STEP' });
  const handleChange = input => e => {
    let splitInput = input.split('.');
    let currentObject;
    if (splitInput[0] === 'event') {
      currentObject = 'event';
    }

    if (splitInput.length === 2) {
      dispatch({
        type: 'UPDATE_FIELD',
        payload: {
          obj: currentObject,
          key: e.target.name,
          value: e.target.value
        }
      });
    }
  };
  const jumpSection = step => {
    // jumpStep(step);
  };

  return (
    <FauxForm>
      <SectionHeading>
        Event Details <button onClick={() => jumpSection(1)}>{'(edit)'}</button>
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
        Contact Info <button onClick={() => jumpSection(2)}>{'(edit)'}</button>
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
        Menu <button onClick={() => jumpSection(3)}>{'(edit)'}</button>
      </SectionHeading>
      <div className="container">
        <SidebarItem>
          <ItemHeading>Meats</ItemHeading>
          {meats && meats.map(meat => <p>{meat}</p>)}
        </SidebarItem>
        <SidebarItem>
          <ItemHeading>Sides</ItemHeading>
          {sides && sides.map(side => <p>{side}</p>)}
        </SidebarItem>
        <SidebarItem>
          <ItemHeading>Salads</ItemHeading>
          {salads && salads.map(salad => <p>{salad}</p>)}
        </SidebarItem>
        <SidebarItem>
          <ItemHeading>Bread</ItemHeading>
          {breads && breads.map(bread => <p>{bread}</p>)}
        </SidebarItem>
        <Total>
          <h3>
            Total: <span>${totalPrice.toFixed(2)}</span>
          </h3>
        </Total>
        <SubmitButton>
          Book Party{' '}
          <span role="img" aria-label="party">
            🎉
          </span>
        </SubmitButton>
      </div>
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

const SidebarItem = styled.div`
  margin-bottom: 3rem;
  p {
    line-height: 1.3;
  }
`;

const Total = styled(SidebarItem)`
  h3 {
    font-size: 2.8rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;

    span {
      color: #9fbdef;
    }
  }
`;

const ItemHeading = styled.h3`
  text-transform: uppercase;
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const SubmitButton = styled.button`
  display: block;
  font-size: 2rem;
  width: 100%;
  border: 1px solid transparent;
  background: #9fbdef;
  padding: 1rem;
  color: #fafafa;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
`;

export default EventDetailsForm;
