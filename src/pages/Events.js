import React from 'react';
import { ComponentContext, useEvent } from '../context/event-context';
import styled from 'styled-components';
import Menu from '../components/Menu';
import MenuSidebar from '../components/MenuSidebar';
import EventCalendar from '../components/EventCalendar';
import EventContactForm from '../components/EventContactForm';
import EventConfirmForm from '../components/EventConfirmForm';

const Events = () => {
  const [state, dispatch] = useEvent(ComponentContext);
  const { step } = state;

  switch (step) {
    case 1:
      return (
        <>
          <StepHeading>
            Step 1: <span>Select A date</span>
          </StepHeading>
          <EventCalendar />
        </>
      );
    case 2:
      return (
        <>
          <StepHeading>
            Step 2: <span>Tell us about you</span>
          </StepHeading>
          <EventContactForm />
        </>
      );
    case 3:
      return (
        <>
          <StepHeading>
            Step 3: <span>Create your menu</span>
          </StepHeading>
          <MenuContainer>
            <Menu />
            <MenuSidebar />
          </MenuContainer>
        </>
      );
    case 4:
      return (
        <>
          <StepHeading>
            Step 4: <span>Confirm Your Event Details</span>
          </StepHeading>
          <EventConfirmForm />
        </>
      );
    default:
      break;
  }
};

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr calc(30vw - 5rem);
  grid-column-gap: 5rem;
  position: relative;
`;

const StepHeading = styled.h2`
  font-size: 3.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 2rem;
  span {
    font-weight: 400;
  }
`;

export default Events;

// import React, { Component } from 'react';
// import styled from 'styled-components';
// import Menu from '../components/Menu';
// import MenuSidebar from '../components/MenuSidebar';
// import EventCalendar from '../components/EventCalendar';
// import EventContactForm from '../components/EventContactForm';
// import EventConfirmForm from '../components/EventConfirmForm';
// import events from '../data/events';
// const upcomingEvents = [...events];

// class Events extends Component {
//   state = {
//     events: [],
//     step: 1,
//     totalPrice: 0,
//     gratuity: 0.18,
//     pricePerPlate: 16.0,
//     priceTier: 1,
//     meats: [],
//     sides: [],
//     salads: [],
//     breads: [],
//     user: {
//       email: '',
//       first_name: '',
//       last_name: '',
//       phone: ''
//     },
//     event: {
//       title: '',
//       location: '',
//       address: '',
//       city: '',
//       state: '',
//       zipcode: '',
//       guests: '100',
//       date: '',
//       start_time: '',
//       end_time: ''
//     },
//     errors: {}
//   };

//   componentDidMount() {
//     this.populateCalendar();
//   }

//   addError = field => {
//     this.setState(prevState => {
//       return { errors: { ...prevState.errors, [field]: true } };
//     });
//   };

//   handleChange = input => e => {
//     // this.setState({ [input]: e.target.value });
//     let splitInput = input.split('.');
//     let { event, user } = this.state;
//     let currentObject;

//     if (splitInput[0] === 'event') {
//       currentObject = event;
//     } else if (splitInput[0] === 'user') {
//       currentObject = user;
//     }

//     if (splitInput.length === 2) {
//       this.setState({
//         [splitInput[0]]: {
//           ...currentObject,
//           [splitInput[1]]: e.target.value
//         },
//         errors: { ...this.state.errors, [splitInput[1]]: false }
//       });
//     } else if (splitInput.length === 1) {
//       this.setState({ [splitInput[0]]: e.target.value });
//     }
//   };

//   nextStep = () => {
//     let { step } = this.state;
//     this.setState({ step: step + 1 });
//   };
//   prevStep = () => {
//     let { step } = this.state;
//     this.setState({ step: step - 1 });
//   };

//   jumpStep = step => {
//     this.setState({ step });
//   };

//   updateGuestNumber = number => {
//     this.setState(
//       {
//         event: { ...this.state.event, guests: parseInt(number) }
//       },
//       () => this.calculateTotalPrice()
//     );
//   };

//   calculateTotalPrice = () => {
//     const { totalPrice, gratuity, pricePerPlate, event } = this.state;
//     let subTotal = pricePerPlate * event.guests;
//     let newTotal = subTotal + subTotal * gratuity;
//     if (newTotal !== totalPrice) {
//       this.setState({ totalPrice: newTotal });
//     }
//   };

//   toggleItemInState = (item, collection) => {
//     const maxItems = { meat: 2, side: 3, salad: 2, bread: 2 };
//     let maxLength = maxItems[item.type];
//     let itemCollection = [...this.state[collection]];

//     if (itemCollection.length) {
//       let removedItem = itemCollection.filter(i => i !== item.name);
//       if (removedItem.length !== itemCollection.length) {
//         this.setState({ [collection]: [...removedItem] });
//         item.selected = false;
//       } else if (itemCollection.length < maxLength) {
//         this.setState({ [collection]: [...itemCollection, item.name] });
//         item.selected = true;
//       }
//     } else {
//       this.setState({ [collection]: [...itemCollection, item.name] });
//       item.selected = true;
//     }
//   };

//   updatePricePerPlate = () => {
//     const { priceTier } = this.state;
//     if (priceTier === 1) {
//       this.setState({ pricePerPlate: 16.0 });
//     } else if (priceTier === 2) {
//       this.setState({ pricePerPlate: 17.0 });
//     } else if (priceTier === 3) {
//       this.setState({ pricePerPlate: 18.0 });
//     } else if (priceTier === 4) {
//       this.setState({ pricePerPlate: 18.5 });
//     }
//   };

//   updatePriceTier = item => {
//     const { priceTier, meats } = this.state;
//     if (meats.length === 0 && priceTier !== 1) {
//       this.setState({ priceTier: 1 });
//     }
//   };

//   handleItemSelection = item => {
//     switch (item.type) {
//       case 'meat':
//         this.toggleItemInState(item, 'meats');
//         break;
//       case 'side':
//         this.toggleItemInState(item, 'sides');
//         break;
//       case 'salad':
//         this.toggleItemInState(item, 'salads');
//         break;
//       case 'bread':
//         this.toggleItemInState(item, 'breads');
//         break;
//       default:
//         break;
//     }
//     this.calculateTotalPrice();
//   };
//   render() {
//     const {
//       meats,
//       sides,
//       salads,
//       breads,
//       totalPrice,
//       event,
//       step,
//       user,
//       errors
//     } = this.state;
//     switch (step) {
//       case 1:
//         return (
//           <>
//             <StepHeading>
//               Step 1: <span>Select A date</span>
//             </StepHeading>
//             <EventCalendar
//               nextStep={this.nextStep}
//               handleChange={this.handleChange}
//               event={event}
//               events={this.state.events}
//               setDate={this.setDate}
//               errors={errors}
//               addError={this.addError}
//             />
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <StepHeading>
//               Step 2: <span>Tell us about you</span>
//             </StepHeading>
//             <EventContactForm
//               handleChange={this.handleChange}
//               nextStep={this.nextStep}
//               prevStep={this.prevStep}
//               user={user}
//               errors={errors}
//               addError={this.addError}
//             />
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <StepHeading>
//               Step 3: <span>Create your menu</span>
//             </StepHeading>
//             <MenuContainer>
//               <Menu
//                 handleItemSelection={this.handleItemSelection}
//                 prevStep={this.prevStep}
//                 meats={meats}
//                 sides={sides}
//                 salads={salads}
//                 breads={breads}
//               />
//               <MenuSidebar
//                 meats={meats}
//                 sides={sides}
//                 salads={salads}
//                 breads={breads}
//                 totalPrice={totalPrice}
//                 guests={event.guests}
//                 updateGuestNumber={this.updateGuestNumber}
//                 nextStep={this.nextStep}
//               />
//             </MenuContainer>
//           </>
//         );
//       case 4:
//         return (
//           <>
//             <StepHeading>
//               Step 4: <span>Confirm Your Event Details</span>
//             </StepHeading>
//             <EventConfirmForm
//               handleChange={this.handleChange}
//               nextStep={this.nextStep}
//               prevStep={this.prevStep}
//               user={user}
//               event={event}
//               totalPrice={totalPrice}
//               meats={meats}
//               sides={sides}
//               salads={salads}
//               breads={breads}
//               jumpStep={this.jumpStep}
//             />
//           </>
//         );
//       default:
//         break;
//     }
//   }
// }

// const MenuContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr calc(30vw - 5rem);
//   grid-column-gap: 5rem;
//   position: relative;
// `;

// const StepHeading = styled.h2`
//   font-size: 3.8rem;
//   font-weight: 700;
//   text-transform: uppercase;
//   margin: 2rem;
//   span {
//     font-weight: 400;
//   }
// `;

// export default Events;
