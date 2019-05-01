import React, { Component } from 'react';
import styled from 'styled-components';

class MenuSidebar extends Component {
  state = { isEditingGuests: false, guests: this.props.guests };

  handleChange = e => {
    // const { updateGuestNumber } = this.props;
    // updateGuestNumber(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleGuestUpdate = () => {
    const { updateGuestNumber } = this.props;
    const { guests } = this.state;
    updateGuestNumber(guests);
  };

  render() {
    const { guests } = this.state;
    const { meats, sides, salads, breads, totalPrice } = this.props;
    return (
      <Sidebar>
        <div className="container">
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
          <Total>
            <h3>
              Total: <span>${totalPrice.toFixed(2)}</span>
            </h3>
          </Total>
          <FormGroup>
            <label htmlFor="guests">Update number of guests:</label>
            <input
              type="number"
              value={guests}
              name="guests"
              id="guests"
              onChange={this.handleChange}
              onBlur={this.handleGuestUpdate}
            />
          </FormGroup>
          <SubmitButton>
            Confirm Party{' '}
            <span role="img" aria-label="party">
              🎉
            </span>
          </SubmitButton>
        </div>
      </Sidebar>
    );
  }
}

const Sidebar = styled.div`
  /* width: 25%; */
  background: #fff;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  min-height: 80vh;
  max-height: 110vh;
  /* position: fixed; */
  /* right: 0; */
  .container {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
  }
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

const Total = styled(SidebarItem)`
  h3 {
    font-size: 2.8rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;

    span {
      color: #9fbdef;
    }
  }
`;

const ItemHeading = styled.h3`
  text-transform: uppercase;
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const FormGroup = styled(SidebarItem)`
  display: flex;
  align-items: center;
  label {
    margin-right: 1rem;
  }
  input {
    border: none;
    font-size: inherit;
    text-decoration: underline;
    font-weight: 700;
    color: #9fbdef;
    width: 30%;
    cursor: pointer;

    &:focus {
      cursor: auto;
      text-decoration: none;
      /* border: 1px solid black; */
    }
  }
`;

const SubmitButton = styled.button`
  display: block;
  font-size: 2rem;
  width: 100%;
  border: 1px solid transparent;
  background: #9fbdef;
  padding: 1rem;
  color: #fafafa;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  /* font */
`;

export default MenuSidebar;
