import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import MenuSidebar from '../components/MenuSidebar';

class Events extends Component {
  state = {
    meats: [],
    sides: [],
    salads: [],
    breads: [],
    user: {
      email: 'rytwalker@gmail.com',
      name: 'Ryan Walker',
      phone: '+13305401036'
    },
    event: {
      name: "Ryan's Bash",
      location: 'Boardman Park',
      address: '123 Street Lane',
      city: 'Boardman',
      state: 'Ohio',
      zipcode: 44512,
      guests: 100
    }
  };

  toggleItemInState = (item, collection) => {
    const maxItems = { meat: 2, side: 3, salad: 2, bread: 2 };
    let maxLength = maxItems[item.type];
    let itemCollection = [...this.state[collection]];

    if (itemCollection.length) {
      let removedItem = itemCollection.filter(i => i !== item.name);
      if (removedItem.length !== itemCollection.length) {
        this.setState({ [collection]: [...removedItem] });
      } else if (itemCollection.length < maxLength) {
        this.setState({ [collection]: [...itemCollection, item.name] });
      }
    } else {
      this.setState({ [collection]: [...itemCollection, item.name] });
    }
  };

  handleItemSelection = item => {
    switch (item.type) {
      case 'meat':
        this.toggleItemInState(item, 'meats');
        break;
      case 'side':
        this.toggleItemInState(item, 'sides');
        break;
      case 'salad':
        this.toggleItemInState(item, 'salads');
        break;
      case 'bread':
        this.toggleItemInState(item, 'breads');
        break;
      default:
        break;
    }
  };
  render() {
    const { meats, sides, salads, breads } = this.state;
    return (
      <MenuContainer>
        <Menu handleItemSelection={this.handleItemSelection} />
        <MenuSidebar
          meats={meats}
          sides={sides}
          salads={salads}
          breads={breads}
        />
      </MenuContainer>
    );
  }
}

const MenuContainer = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 60% 1fr;
  grid-column-gap: 5rem;
  position: relative;
`;

export default Events;
