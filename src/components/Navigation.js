import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../context/auth-context';

/*
Using render prop will convert to hooks one day soon
*/

const Navigation = () => {
  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <StyledNavigation>
            <Container>
              <Logo>Hank Brock Catering</Logo>
              <nav>
                {!context.token && <NavLink to="/auth">Login/Register</NavLink>}
                <NavLink to="/calendar">Calendar</NavLink>
                {context.token && (
                  <>
                    <NavLink to="/book">Book With Us</NavLink>
                    <button onClick={context.logout}>Log out</button>
                  </>
                )}
              </nav>
            </Container>
          </StyledNavigation>
        );
      }}
    </AuthContext.Consumer>
  );
};

const StyledNavigation = styled.header`
  position: fixed;
  height: 7rem;
  width: 100%;
  background: #fff;
  top: 0;
  right: 0;
  border-bottom: 1px solid #fafafa;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1020px;
  margin: 0 auto;

  a,
  button {
    font-size: 1.8rem;
    color: #4f4f4f;
    text-decoration: none;
    text-transform: uppercase;
    margin-left: 2.4rem;
    transition: all 0.2s;
  }

  .active,
  a:hover,
  button:hover {
    color: #9fbdef;
    text-decoration: underline;
  }

  button {
    background: transparent;
    border: none;
    font-size: inherit;
    cursor: pointer;
  }
`;

const Logo = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2.6rem;
`;

export default Navigation;
