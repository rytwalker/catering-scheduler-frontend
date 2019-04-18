import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();

    if (!email.length || !password.length) {
      return;
    }

    // const requestBody = {
    //   query: `
    //     mutation {
    //       createUser(userInput: {email: "${email}", password: "${password}", first_name: "${first_name}", last_name: "${last_name}", phone_number: "${phone_number}"}) {
    //         _id
    //         email
    //       }
    //     }
    //   `
    // };

    // fetch('http://localhost:5000/graphql', {
    //   method: 'POST',
    //   body: JSON.stringify(requestBody),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, password } = this.state;
    return (
      <StyledLoginForm onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <TextInput
            type="text"
            name="email"
            id="email"
            onChange={this.handleChange}
            value={email}
            placeholder="email@email.com"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <TextInput
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            value={password}
            placeholder="password"
          />
        </FormGroup>
        <ButtonGroup>
          <FormButton type="submit">Register</FormButton>
          <RegisterParagraph>
            Not signed up?
            <button onClick={this.props.toggleForm}>Register</button>
          </RegisterParagraph>
        </ButtonGroup>
      </StyledLoginForm>
    );
  }
}

const StyledLoginForm = styled.form`
  width: 400px;
  background: #fff;
  border: 1px solid #fafafa;
  border-radius: 5px;
  padding: 3rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
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

const RegisterParagraph = styled.p`
  font-size: 1.2rem;
  button {
    margin-left: 0.8rem;
    color: #9fbdef;
    border: none;
    cursor: pointer;
  }
`;

export default LoginForm;
