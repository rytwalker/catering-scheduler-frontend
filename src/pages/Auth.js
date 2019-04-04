import React, { Component } from 'react';

class AuthPage extends Component {
  state = { email: '', passowrd: '' };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={this.handleChange}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            value={password}
          />
        </div>
      </form>
    );
  }
}

export default AuthPage;
