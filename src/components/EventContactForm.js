import React from 'react';
import {
  FauxForm,
  FormGroup,
  FormLabel,
  TextInput,
  ButtonGroup,
  FormButton
} from 'elements';

function EventContactForm({ handleChange, nextStep, prevStep, user }) {
  return (
    <FauxForm>
      <FormGroup>
        <FormLabel htmlFor="first_name">First Name:</FormLabel>
        <TextInput
          type="text"
          name="first_name"
          id="first_name"
          onChange={handleChange('user.first_name')}
          defaultValue={user.first_name}
          placeholder="First Name"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="last_name">Last Name:</FormLabel>
        <TextInput
          type="text"
          name="last_name"
          id="last_name"
          onChange={handleChange('user.last_name')}
          defaultValue={user.last_name}
          placeholder="Last Name"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">Email:</FormLabel>
        <TextInput
          type="text"
          name="email"
          id="email"
          onChange={handleChange('user.email')}
          defaultValue={user.email}
          placeholder="email@email.com"
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="phone">Phone:</FormLabel>
        <TextInput
          type="text"
          name="phone"
          id="phone"
          onChange={handleChange('user.phone')}
          defaultValue={user.phone}
          placeholder="(330) 555-5555"
        />
      </FormGroup>

      <ButtonGroup>
        <FormButton onClick={prevStep}>Back</FormButton>
        <FormButton onClick={nextStep}>Next</FormButton>
      </ButtonGroup>
    </FauxForm>
  );
}

export default EventContactForm;
