import React, { Component } from 'react';
import styled from 'styled-components';
import AuthContext from '../context/auth-context';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  static contextType = AuthContext;

  handleSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();

    if (!email.length || !password.length) {
      return;
    }

    const requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            user_id
            token
            tokenExpiration
          }
        }
      `
    };

    fetch('http://localhost:5000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed');
        }
        return res.json();
      })
      .then(resData => {
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.user_id,
            resData.data.login.tokenExpiration
          );
        }
        console.log(resData);
      })
      .catch(err => console.log(err));
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
          <FormButton type="submit">Login</FormButton>
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
