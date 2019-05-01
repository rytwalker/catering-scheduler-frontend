import React, { Component } from 'react';
import styled from 'styled-components';

class MenuSidebar extends Component {
  render() {
    const { meats, sides, salads, breads } = this.props;
    return (
      <Sidebar>
        <SidebarHeading>Your Menu</SidebarHeading>
        <SidebarItem>
          <ItemHeading>Meats</ItemHeading>
          {meats && meats.map(meat => <p>{meat}</p>)}
        </SidebarItem>
        <SidebarItem>
          <ItemHeading>Sides</ItemHeading>
          {sides && sides.map(side => <p>{side}</p>)}
        </SidebarItem>
        <SidebarItem>
          <ItemHeading>Salads</ItemHeading>
          {salads && salads.map(salad => <p>{salad}</p>)}
        </SidebarItem>
        <SidebarItem>
          <ItemHeading>Bread</ItemHeading>
          {breads && breads.map(bread => <p>{bread}</p>)}
        </SidebarItem>
      </Sidebar>
    );
  }
}

const Sidebar = styled.div`
  /* width: 25%; */
  background: #fff;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* position: fixed; */
  /* right: 0; */
`;

const SidebarHeading = styled.h2`
  text-transform: uppercase;
  font-size: 3.6rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

const SidebarItem = styled.div`
  margin-bottom: 3rem;
  p {
    line-height: 1.3;
  }
`;

const ItemHeading = styled.h3`
  text-transform: uppercase;
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export default MenuSidebar;
