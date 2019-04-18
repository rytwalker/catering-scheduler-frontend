import React, { Component } from 'react';
import styled from 'styled-components';
import AuthContext from '../context/auth-context';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

class AuthPage extends Component {
  state = {
    isRegistering: false
  };

  static contextType = AuthContext;

  toggleForm = () =>
    this.setState({ isRegistering: !this.state.isRegistering });

  render() {
    const { isRegistering } = this.state;
    return (
      <LoginPage>
        {isRegistering ? (
          <RegisterForm toggleForm={this.toggleForm} />
        ) : (
          <LoginForm toggleForm={this.toggleForm} />
        )}
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

export default AuthPage;
