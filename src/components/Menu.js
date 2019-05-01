import React, { Component } from 'react';
import styled from 'styled-components';

const meats = [
  {
    id: 1,
    name: 'BBQ Pork Loin',
    price: '$16.00',
    type: 'meat',
    tier: 1
  },
  {
    id: 2,
    name: 'Smoked Bone-In Chicken Thighs',
    price: '$16.00',
    type: 'meat',
    tier: 1
  },
  {
    id: 3,
    name: 'Boneless Chicken Breasts',
    price: '$16.00',
    type: 'meat',
    tier: 1
  },
  {
    id: 4,
    name: 'Angus Top Round Beef',
    price: '$16.00',
    type: 'meat',
    tier: 2
  },
  {
    id: 5,
    name: 'Smoked Boneless Turkey Breast',
    price: '$16.00',
    type: 'meat',
    tier: 2
  },
  {
    id: 6,
    name: 'BBQ Babyback Ribs',
    price: '$16.00',
    type: 'meat',
    tier: 2
  },
  {
    id: 7,
    name: 'French Cut Lamb Ribs',
    price: '$16.00',
    type: 'meat',
    tier: 3
  }
];

const sides = [
  {
    id: 1,
    name: "David's Potato Crepes",
    type: 'side'
  },
  {
    id: 2,
    name: 'Green Beans',
    type: 'side'
  },
  {
    id: 3,
    name: 'Roasted Red Peppers',
    type: 'side'
  },
  {
    id: 4,
    name: 'Hungarian Hot Peppers',
    type: 'side'
  },
  {
    id: 5,
    name: 'Roasted Zuccini and Yellow Squash',
    type: 'side'
  },
  {
    id: 6,
    name: 'Brussel Sprouts and Bacon',
    type: 'side'
  },
  {
    id: 7,
    name: 'Steamed Corn on the Cob',
    type: 'side'
  }
];

const salads = [
  { id: 1, name: 'Penne or Bow Tie Pasta Salad', type: 'salad' },
  { id: 2, name: 'Tomato, Onion, and Pepper Salad', type: 'salad' },
  { id: 3, name: 'Tossed Salad', type: 'salad' }
];

class Menu extends Component {
  state = {};
  selectItem = item => {
    const { handleItemSelection } = this.props;
    handleItemSelection(item);
  };
  render() {
    return (
      <StyledMenu>
        <ItemTypeSection>
          <ItemHeader>
            <ItemHeading>Select 2 Meats</ItemHeading>
            <p>
              All of our poutry and meats are smoked utilizing a combination of
              hard woods and non-seasoned cherry wood.
            </p>
          </ItemHeader>
          <ItemCards>
            {meats.map(meat => (
              <ItemCard key={meat.id} onClick={() => this.selectItem(meat)}>
                <h3>{meat.name}</h3>
                <ItemLogo>M</ItemLogo>
                <p>{meat.price} per plate</p>
              </ItemCard>
            ))}
          </ItemCards>
        </ItemTypeSection>
        <ItemTypeSection>
          <ItemHeader>
            <ItemHeading>Select 3 Sides</ItemHeading>
            <p>Additional sides can be added for $1.00 per guest.</p>
          </ItemHeader>
          <ItemCards>
            {sides.map(side => (
              <ItemCard key={side.id} onClick={() => this.selectItem(side)}>
                <h3>{side.name}</h3>
                <ItemLogo>S</ItemLogo>
              </ItemCard>
            ))}
          </ItemCards>
        </ItemTypeSection>
        <ItemTypeSection>
          <ItemHeader>
            <ItemHeading>Select 2 Salads</ItemHeading>
          </ItemHeader>
          <ItemCards>
            {salads.map(salad => (
              <ItemCard key={salad.id} onClick={() => this.selectItem(salad)}>
                <h3>{salad.name}</h3>
                <ItemLogo>S</ItemLogo>
              </ItemCard>
            ))}
          </ItemCards>
        </ItemTypeSection>
        <ItemTypeSection>
          <ItemHeader>
            <ItemHeading>Select Bread</ItemHeading>
            <p>
              A choice of French Bread or Dinner Rolls with butter. Select both
              for a combination.
            </p>
          </ItemHeader>
          <ItemCards>
            {salads.map(salad => (
              <ItemCard key={salad.id}>
                <h3>{salad.name}</h3>
                <ItemLogo>S</ItemLogo>
              </ItemCard>
            ))}
          </ItemCards>
        </ItemTypeSection>
      </StyledMenu>
    );
  }
}

const StyledMenu = styled.div`
  /* width: 60%; */
`;

const ItemTypeSection = styled.section`
  background: #fff;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 5rem;
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
  color: #4f4f4f;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* width: 30%; */
  height: 250px;
  cursor: pointer;
  text-align: center;
  padding: 1rem;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -2px, 0);
  }
  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
`;

const ItemLogo = styled.div`
  color: #9fbdef;
  background: #4f4f4f;
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
