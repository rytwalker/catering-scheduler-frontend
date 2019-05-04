import styled from 'styled-components';
import { white, lightGrey, black, primary } from 'utilities';

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
  font-family: inherit;
  font-size: inherit;
  border: 1px solid ${black};
  border-radius: 5px;
  padding: 1rem 0.5rem;
`;

export const DisabledTextInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  border: 1px solid transparent;
  border-bottom: 1px solid ${black};
  padding: 1rem 0.5rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormButton = styled.button`
  font-size: inherit;
  font-weight: 400;
  text-transform: uppercase;
  color: ${white};
  background: ${primary};
  border: transparent;
  border-radius: 5px;
  margin-bottom: 2rem;
  padding: 1rem;
  cursor: pointer;
`;

export const InputGroup = styled.div`
  display: grid;
  grid-column-gap: 2rem;
`;

export const LocationInputGroup = styled(InputGroup)`
  grid-template-columns: 2fr 1fr 1fr;
`;

export const DateInputGroup = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: 2fr 1fr 1fr 1fr;
`;
