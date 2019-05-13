import React from 'react';
import { useEvent, ComponentContext } from '../context/event-context';
import {
  FauxForm,
  FormGroup,
  FormLabel,
  ErrorField,
  TextInput,
  ButtonGroupTwo,
  FormButton
} from 'elements';

function EventContactForm() {
  const [state, dispatch] = useEvent(ComponentContext);
  const { errors, user, step } = state;

  const incrementStep = () => dispatch({ type: 'INCREMENT_STEP' });
  const decrementStep = () => dispatch({ type: 'DECREMENT_STEP' });
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
  // const continueOn = () => {
  //   let isValid = true;
  //   for (let field in user) {
  //     if (user[field].length === 0) {
  //       addError(field);
  //       isValid = false;
  //     }
  //   }

  //   if (isValid) {
  //     nextStep();
  //   }
  // };
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
        <FormButton onClick={decrementStep}>Back</FormButton>
        <FormButton onClick={incrementStep}>Next</FormButton>
      </ButtonGroupTwo>
    </FauxForm>
  );
}

export default EventContactForm;
