import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import Bookings from './pages/Bookings';
import EventsPage from './pages/Events';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <main style={{ margin: '8rem auto 0', maxWidth: '1020px' }}>
          <Switch>
            <Redirect path="/" to="/auth" exact />
            <Route path="/auth" component={AuthPage} />
            <Route path="/calendar" component={EventsPage} />
            <Route path="/book" component={Bookings} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
