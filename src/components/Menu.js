import React, { Component } from 'react';
import styled from 'styled-components';
import { CardContainer, ItemCard } from 'elements';
import { meats, sides, salads, breads } from '../data/food';

class Menu extends Component {
  selectItem = item => {
    const { handleItemSelection } = this.props;
    handleItemSelection(item);
  };
  render() {
    return (
      <StyledMenu>
        <button onClick={this.props.prevStep}>Back</button>
        <ItemTypeSection>
          <ItemHeader>
            <ItemHeading>Select 2 Meats</ItemHeading>
            <p>
              All of our poutry and meats are smoked utilizing a combination of
              hard woods and non-seasoned cherry wood.
            </p>
          </ItemHeader>
          <CardContainer>
            {meats.map(meat => (
              <ItemCard key={meat.id} onClick={() => this.selectItem(meat)}>
                {meat.selected ? <CardOverlay>1</CardOverlay> : null}
                <h3>{meat.name}</h3>
                <ItemLogo>M</ItemLogo>
                <p>{meat.price} per plate</p>
              </ItemCard>
            ))}
          </CardContainer>
        </ItemTypeSection>
        <ItemTypeSection>
          <ItemHeader>
            <ItemHeading>Select 3 Sides</ItemHeading>
            <p>Additional sides can be added for $1.00 per guest.</p>
          </ItemHeader>
          <CardContainer>
            {sides.map(side => (
              <ItemCard key={side.id} onClick={() => this.selectItem(side)}>
                {side.selected ? <CardOverlay>1</CardOverlay> : null}
                <h3>{side.name}</h3>
                <ItemLogo>S</ItemLogo>
              </ItemCard>
            ))}
          </CardContainer>
        </ItemTypeSection>
        <ItemTypeSection>
          <ItemHeader>
            <ItemHeading>Select 2 Salads</ItemHeading>
          </ItemHeader>
          <CardContainer>
            {salads.map(salad => (
              <ItemCard key={salad.id} onClick={() => this.selectItem(salad)}>
                {salad.selected ? <CardOverlay>1</CardOverlay> : null}
                <h3>{salad.name}</h3>
                <ItemLogo>S</ItemLogo>
              </ItemCard>
            ))}
          </CardContainer>
        </ItemTypeSection>
        <ItemTypeSection>
          <ItemHeader>
            <ItemHeading>Select Bread</ItemHeading>
            <p>
              A choice of French Bread or Dinner Rolls with butter. Select both
              for a combination.
            </p>
          </ItemHeader>
          <CardContainer>
            {breads.map(bread => (
              <ItemCard key={bread.id} onClick={() => this.selectItem(bread)}>
                {bread.selected ? <CardOverlay>1</CardOverlay> : null}
                <h3>{bread.name}</h3>
                <ItemLogo>S</ItemLogo>
              </ItemCard>
            ))}
          </CardContainer>
        </ItemTypeSection>
      </StyledMenu>
    );
  }
}

const StyledMenu = styled.div`
  /* width: 60%; */
  /* grid-column-start: 2; */
`;

const CardOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
`;

const ItemTypeSection = styled.section`
  background: #fff;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 5rem;
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

export const ItemHeader = styled.header`
  margin-bottom: 2rem;
`;

export const ItemHeading = styled.h2`
  font-size: 3.6rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export default Menu;
