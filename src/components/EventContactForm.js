import React from 'react';
import styled from 'styled-components';

function EventContactForm({ handleChange, nextStep, prevStep, user }) {
  return (
    <StyledEventContactForm>
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
    </StyledEventContactForm>
  );
}

const StyledEventContactForm = styled.div`
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

export default EventContactForm;
