import React, { Component } from 'react';
import styled from 'styled-components';
import AuthContext from '../context/auth-context';

class CreateEventForm extends Component {
  state = {
    title: '',
    number_of_guests: '',
    location: '',
    price: '',
    date: '',
    start_time: '',
    end_time: ''
  };

  static contextType = AuthContext;

  handleSubmit = e => {
    let {
      title,
      number_of_guests,
      location,
      price,
      date,
      start_time,
      end_time
    } = this.state;
    e.preventDefault();

    if (
      !title.length ||
      !number_of_guests.length ||
      !location.length ||
      !price.length ||
      !date.length ||
      !start_time.length ||
      !end_time.length
    ) {
      return;
    }
    const user_id = parseInt(this.context.user_id);
    price = parseFloat(price);
    number_of_guests = parseInt(number_of_guests);
    console.log(typeof number_of_guests);
    const requestBody = {
      query: `
        mutation {
          createEvent(eventInput: {title: "${title}", number_of_guests: ${number_of_guests}, location: "${location}", price: ${price}, date: "${date}", start_time: "${start_time}", end_time: "${end_time}", user_id: ${user_id} }) {
            title
            number_of_guests
            location
            price
            date
            start_time
            end_time
            user {
              _id
              email
              password
              first_name
              last_name
              phone_number
            }
          }
        }
      `
    };

    const token = this.context.token;

    fetch('http://localhost:5000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => console.dir(err));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      title,
      number_of_guests,
      location,
      date,
      start_time,
      end_time
    } = this.state;
    return (
      <StyledCreateEventForm onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="title">Event Name:</FormLabel>
          <TextInput
            type="text"
            name="title"
            id="title"
            onChange={this.handleChange}
            value={title}
            placeholder="Graduation Party"
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="location">Location:</FormLabel>
          <TextInput
            type="text"
            name="location"
            id="location"
            onChange={this.handleChange}
            value={location}
            placeholder="Boardman Park"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="location">Address:</FormLabel>
          <TextInput
            type="text"
            name="location"
            id="location"
            onChange={this.handleChange}
            value={location}
            placeholder="123 Green Ave."
          />
        </FormGroup>
        <LocationFormGroup>
          <FormGroup>
            <FormLabel htmlFor="location">City:</FormLabel>
            <TextInput
              type="text"
              name="location"
              id="location"
              onChange={this.handleChange}
              value={location}
              placeholder="Boardman"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="location">State:</FormLabel>
            <TextInput
              type="text"
              name="location"
              id="location"
              onChange={this.handleChange}
              value={location}
              placeholder="Ohio"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="location">Zip:</FormLabel>
            <TextInput
              type="text"
              name="location"
              id="location"
              onChange={this.handleChange}
              value={location}
              placeholder="44512"
            />
          </FormGroup>
        </LocationFormGroup>
        <DateFormGroup>
          <FormGroup>
            <FormLabel htmlFor="date">Date:</FormLabel>
            <TextInput
              type="date"
              name="date"
              id="date"
              onChange={this.handleChange}
              value={date}
              // placeholder="$200.50"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="start_time">Start Time:</FormLabel>
            <TextInput
              type="time"
              name="start_time"
              id="start_time"
              onChange={this.handleChange}
              value={start_time}
              placeholder="7:00pm"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="end_time">End Time:</FormLabel>
            <TextInput
              type="time"
              name="end_time"
              id="end_time"
              onChange={this.handleChange}
              value={end_time}
              placeholder="7:00pm"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="number_of_guests">Guests:</FormLabel>
            <TextInput
              type="number"
              name="number_of_guests"
              id="number_of_guests"
              onChange={this.handleChange}
              value={number_of_guests}
              placeholder="100"
            />
          </FormGroup>
        </DateFormGroup>
        <ButtonGroup>
          <FormButton onClick={this.props.nextStep}>Next</FormButton>
        </ButtonGroup>
      </StyledCreateEventForm>
    );
  }
}

const StyledCreateEventForm = styled.form`
  /* width: 800px; */
  background: #fff;
  border: 1px solid #fafafa;
  border-radius: 5px;
  padding: 3rem;
  overflow: scroll;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const LocationFormGroup = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-column-gap: 2rem;
`;

const DateFormGroup = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
`;

const FormLabel = styled.label`
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const TextInput = styled.input`
  border-radius: 5px;
  border: 1px solid #4f4f4f;
  font-size: inherit;
  padding: 1rem 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormButton = styled.button`
  background: #9fbdef;
  color: #fff;
  font-weight: 400;
  font-size: inherit;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  border: transparent;
  cursor: pointer;
`;

export default CreateEventForm;
