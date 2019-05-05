import styled from 'styled-components';
import { white, black } from 'utilities';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
`;

export const Card = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -2px, 0);
  }
`;

export const ItemCard = styled(Card)`
  color: ${black};
  background: ${white};
  height: 250px;
  cursor: pointer;
  text-align: center;
  position: relative;
  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
`;
