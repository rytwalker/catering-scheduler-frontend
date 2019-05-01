import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import MenuSidebar from '../components/MenuSidebar';
import EventCalendar from '../components/EventCalendar';
import CreateEventForm from '../components/CreateEventForm';

class Events extends Component {
  state = {
    step: 1,
    totalPrice: 0,
    gratuity: 0.18,
    pricePerPlate: 16.0,
    priceTier: 1,
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

  nextStep = () => {
    let { step } = this.state;
    this.setState({ step: step + 1 });
  };
  prevStep = () => {
    let { step } = this.state;
    this.setState({ step: step - 1 });
  };

  updateGuestNumber = number => {
    this.setState(
      {
        event: { ...this.state.event, guests: parseInt(number) }
      },
      () => this.calculateTotalPrice()
    );
  };

  calculateTotalPrice = () => {
    const { totalPrice, gratuity, pricePerPlate, event } = this.state;
    let subTotal = pricePerPlate * event.guests;
    let newTotal = subTotal + subTotal * gratuity;
    if (newTotal !== totalPrice) {
      this.setState({ totalPrice: newTotal });
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

  updatePricePerPlate = () => {
    const { priceTier } = this.state;
    if (priceTier === 1) {
      this.setState({ pricePerPlate: 16.0 });
    } else if (priceTier === 2) {
      this.setState({ pricePerPlate: 17.0 });
    } else if (priceTier === 3) {
      this.setState({ pricePerPlate: 18.0 });
    } else if (priceTier === 4) {
      this.setState({ pricePerPlate: 18.5 });
    }
  };

  // updatePriceTier = item => {
  //   const { priceTier } = this.state;
  //   if (item.type === 'meat') {
  //     if (item.tier === 1)
  //   }
  // }

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
    this.calculateTotalPrice();
  };
  render() {
    const {
      meats,
      sides,
      salads,
      breads,
      totalPrice,
      event,
      step
    } = this.state;
    switch (step) {
      case 1:
        return <EventCalendar nextStep={this.nextStep} />;
      case 2:
        return (
          <CreateEventForm nextStep={this.nextStep} prevStep={this.prevStep} />
        );
      case 3:
        return (
          <MenuContainer>
            <Menu handleItemSelection={this.handleItemSelection} />
            <MenuSidebar
              meats={meats}
              sides={sides}
              salads={salads}
              breads={breads}
              totalPrice={totalPrice}
              guests={event.guests}
              updateGuestNumber={this.updateGuestNumber}
            />
          </MenuContainer>
        );
      default:
        break;
    }
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
