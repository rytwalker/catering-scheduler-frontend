import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import Bookings from './pages/Bookings';
import EventsPage from './pages/Events';
import Navigation from './components/Navigation';
import AuthContext from './context/auth-context';
class App extends Component {
  state = {
    token: null,
    user_id: null
  };
  login = (token, user_id, tokenExpiration) => {
    this.setState({ token, user_id });
  };

  logout = () => {
    this.setState({ token: null, user_id: null });
  };

  render() {
    return (
      <>
        <AuthContext.Provider
          value={{
            token: this.state.token,
            user_id: this.state.user_id,
            login: this.login,
            logout: this.logout
          }}
        >
          <Navigation />
          <main style={{ margin: '8rem auto 0', maxWidth: '1020px' }}>
            <Switch>
              {this.state.token && <Redirect path="/" to="/calendar" exact />}
              {this.state.token && (
                <Redirect path="/auth" to="/calendar" exact />
              )}
              {!this.state.token && <Route path="/auth" component={AuthPage} />}
              <Route path="/calendar" component={EventsPage} />
              {this.state.token && <Route path="/book" component={Bookings} />}
              {!this.state.token && <Redirect to="/auth" exact />}
            </Switch>
          </main>
        </AuthContext.Provider>
      </>
    );
  }
}

export default App;
