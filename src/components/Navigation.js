import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <StyledNavigation>
      <Container>
        <Logo>Hank Brock Catering</Logo>
        <nav>
          <NavLink to="/calendar">Calendar</NavLink>
          <NavLink to="/book">Book With Us</NavLink>
        </nav>
      </Container>
    </StyledNavigation>
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

  a {
    font-size: 1.8rem;
    color: #4f4f4f;
    text-decoration: none;
    text-transform: uppercase;
    margin-left: 2.4rem;
    transition: all 0.2s;
  }

  .active,
  a:hover {
    color: #9fbdef;
    text-decoration: underline;
  }
`;

const Logo = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2.6rem;
`;

export default Navigation;
