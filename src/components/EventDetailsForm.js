import React from 'react';
import {
  FauxForm,
  FormGroup,
  FormLabel,
  ErrorField,
  TextInput,
  ButtonGroup,
  FormButton,
  LocationInputGroup,
  DateInputGroup,
  StepHeading
} from 'elements';

function EventDetailsForm({ addError, errors, event, handleChange, nextStep }) {
  const continueOn = () => {
    let isValid = true;
    for (let field in event) {
      if (event[field].length === 0) {
        addError(field);
        isValid = false;
      }
    }

    if (isValid) {
      nextStep();
    }
  };

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
          isError={errors.title}
        />
        {errors.title ? <ErrorField>Field is required</ErrorField> : null}
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
          isError={errors.location}
        />
        {errors.location ? <ErrorField>Field is required</ErrorField> : null}
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
          isError={errors.address}
        />
        {errors.address ? <ErrorField>Field is required</ErrorField> : null}
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
            isError={errors.city}
          />
          {errors.city ? <ErrorField>Field is required</ErrorField> : null}
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
            isError={errors.state}
          />
          {errors.state ? <ErrorField>Field is required</ErrorField> : null}
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
            isError={errors.zipcode}
          />
          {errors.zipcode ? <ErrorField>Field is required</ErrorField> : null}
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
            disabled
            isError={errors.date}
          />
          {errors.date ? <ErrorField>Field is required</ErrorField> : null}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="start_time">Start Time:</FormLabel>
          <TextInput
            type="time"
            name="start_time"
            id="start_time"
            onChange={handleChange('event.start_time')}
            defaultValue={event.start_time}
            placeholder="19:00:00"
            isError={errors.start_time}
          />
          {errors.start_time ? (
            <ErrorField>Field is required</ErrorField>
          ) : null}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="end_time">End Time:</FormLabel>
          <TextInput
            type="time"
            name="end_time"
            id="end_time"
            onChange={handleChange('event.end_time')}
            defaultValue={event.end_time}
            placeholder="20:00:00"
            isError={errors.end_time}
          />
          {errors.end_time ? <ErrorField>Field is required</ErrorField> : null}
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
            isError={errors.guests}
          />
          {errors.guests ? <ErrorField>Field is required</ErrorField> : null}
        </FormGroup>
      </DateInputGroup>
      <ButtonGroup>
        <FormButton onClick={continueOn}>Next</FormButton>
      </ButtonGroup>
    </FauxForm>
  );
}

export default EventDetailsForm;
