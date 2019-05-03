import styled from 'styled-components';
import { white, lightGrey } from 'utilities';

export const Form = styled.form`
  background: ${white};
  border: 1px solid ${lightGrey};
  border-radius: 5px;
  padding: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const FauxForm = styled.div`
  background: ${white};
  border: 1px solid ${lightGrey};
  border-radius: 5px;
  padding: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const FormLabel = styled.label`
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const TextInput = styled.input`
  border-radius: 5px;
  border: 1px solid #4f4f4f;
  font-size: inherit;
  padding: 1rem 0.5rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormButton = styled.button`
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

export const LocationFormGroup = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-column-gap: 2rem;
`;

export const DateFormGroup = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
`;
