import React, { Component } from 'react';
import styled from 'styled-components';
import AuthContext from '../context/auth-context';

class CreateEventForm extends Component {
  state = {
    title: '',
    number_of_guests: null,
    location: '',
    price: null,
    date: '',
    start_time: '',
    end_time: '',
    user_id: null
  };

  static contextType = AuthContext;

  handleSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();

    if (!email.length || !password.length) {
      return;
    }

    const requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            user_id
            token
            tokenExpiration
          }
        }
      `
    };

    fetch('http://localhost:5000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed');
        }
        return res.json();
      })
      .then(resData => {
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.user_id,
            resData.data.login.tokenExpiration
          );
        }
        console.log(resData);
      })
      .catch(err => console.log(err));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      title,
      number_of_guests,
      location,
      price,
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
        <FormGroup>
          <FormLabel htmlFor="location">Location:</FormLabel>
          <TextInput
            type="text"
            name="location"
            id="location"
            onChange={this.handleChange}
            value={location}
            placeholder="Boardman Park 123 Green Ave. Boardman, Ohio 44512"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="price">Price:</FormLabel>
          <TextInput
            type="number"
            name="price"
            id="price"
            onChange={this.handleChange}
            value={price}
            placeholder="$200.50"
          />
        </FormGroup>
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
        <ButtonGroup>
          <FormButton type="submit">Book it</FormButton>
        </ButtonGroup>
      </StyledCreateEventForm>
    );
  }
}

const StyledCreateEventForm = styled.form`
  width: 800px;
  background: #fff;
  border: 1px solid #fafafa;
  border-radius: 5px;
  padding: 3rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
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

const RegisterParagraph = styled.p`
  font-size: 1.2rem;
  button {
    margin-left: 0.8rem;
    color: #9fbdef;
    border: none;
    cursor: pointer;
  }
`;

export default CreateEventForm;
