import React from 'react';
import {
  FauxForm,
  FormGroup,
  FormLabel,
  ErrorField,
  TextInput,
  ButtonGroupTwo,
  FormButton
} from 'elements';

function EventContactForm({
  addError,
  errors,
  handleChange,
  nextStep,
  prevStep,
  user
}) {
  const continueOn = () => {
    let isValid = true;
    for (let field in user) {
      if (user[field].length === 0) {
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
      <FormGroup>
        <FormLabel htmlFor="first_name">First Name:</FormLabel>
        <TextInput
          type="text"
          name="first_name"
          id="first_name"
          onChange={handleChange('user.first_name')}
          defaultValue={user.first_name}
          placeholder="First Name"
          isError={errors.first_name}
        />
        {errors.first_name ? <ErrorField>Field is required</ErrorField> : null}
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
          isError={errors.last_name}
        />
        {errors.last_name ? <ErrorField>Field is required</ErrorField> : null}
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
          isError={errors.email}
        />
        {errors.email ? <ErrorField>Field is required</ErrorField> : null}
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
          isError={errors.phone}
        />
        {errors.phone ? <ErrorField>Field is required</ErrorField> : null}
      </FormGroup>

      <ButtonGroupTwo>
        <FormButton onClick={prevStep}>Back</FormButton>
        <FormButton onClick={continueOn}>Next</FormButton>
      </ButtonGroupTwo>
    </FauxForm>
  );
}

export default EventContactForm;
