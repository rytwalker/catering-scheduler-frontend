import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <StyledFooter>© 2019 Hank Brock Catering</StyledFooter>;
};

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
`;

export default Footer;
