import React, { Component } from 'react';
import styled from 'styled-components';

class AuthPage extends Component {
  state = { email: '', passowrd: '' };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, password } = this.state;
    return (
      <LoginPage>
        <LoginForm>
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
          <div>
            <button type="button">Sign Up</button>
            <button type="submit">Login</button>
          </div>
        </LoginForm>
      </LoginPage>
    );
  }
}

const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px);
`;

const LoginForm = styled.form`
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

export default AuthPage;
