import React, { Component } from 'react';
import styled from 'styled-components';

const meats = [
  {
    id: 1,
    name: 'BBQ Pork Loin',
    price: '$16.00'
  },
  {
    id: 2,
    name: 'Smoked Bone-In Chicken Thighs',
    price: '$16.00'
  },
  {
    id: 3,
    name: 'Boneless Chicken Breasts',
    price: '$16.00'
  },
  {
    id: 4,
    name: 'Angus Top Round Beef',
    price: '$16.00'
  },
  {
    id: 5,
    name: 'Smoked Boneless Turkey Breast',
    price: '$16.00'
  },
  {
    id: 6,
    name: 'BBQ Babyback Ribs',
    price: '$16.00'
  },
  {
    id: 7,
    name: 'French Cut Lamb Ribs',
    price: '$16.00'
  }
];

class Menu extends Component {
  state = {};
  render() {
    return (
      <StyledMenu>
        <ItemTypeSection>
          <ItemHeader>
            <ItemHeading>Select 3 Meats</ItemHeading>
            <p>
              All of our poutry and meats are smoked utilizing a combination of
              hard woods and non-seasoned cherry wood.
            </p>
          </ItemHeader>
          <ItemCards>
            {meats.map(meat => (
              <ItemCard key={meat.id}>
                <h3>{meat.name}</h3>
                <ItemLogo>M</ItemLogo>
                <p>{meat.price} per plate</p>
              </ItemCard>
            ))}
          </ItemCards>
        </ItemTypeSection>
      </StyledMenu>
    );
  }
}

const StyledMenu = styled.div`
  width: 60%;
`;

const ItemTypeSection = styled.section`
  background: #fff;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ItemHeader = styled.header`
  margin-bottom: 2rem;
`;

const ItemHeading = styled.h2`
  font-size: 3.6rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ItemCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
`;

const ItemCard = styled.div`
  background: #4f4f4f;
  color: #fff;
  /* width: 30%; */
  height: 250px;
  cursor: pointer;
  text-align: center;
  padding: 1rem;
  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
`;

const ItemLogo = styled.div`
  color: #9fbdef;
  background: #fff;
  height: 100px;
  width: 100px;
  margin: 2rem auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
`;

export default Menu;
