import React, { createContext, useContext, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_FIELD':
      const { obj, key, value } = action.payload;
      return {
        ...state,
        [obj]: {
          ...state[obj],
          [key]: value
        }
      };
    case 'GET_EVENTS':
      return {
        ...state,
        events: [...action.payload]
      };
    case 'SET_DATE':
      return {
        ...state,
        event: { ...state.event, date: action.payload }
      };
    case 'INCREMENT_STEP':
      return {
        ...state,
        step: (state.step += 1)
      };
    case 'DECREMENT_STEP':
      return {
        ...state,
        step: (state.step -= 1)
      };
    default:
      return state;
  }
};

const initalState = {
  events: [],
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
    email: '',
    first_name: '',
    last_name: '',
    phone: ''
  },
  event: {
    title: '',
    location: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    guests: '100',
    date: '',
    start_time: '',
    end_time: ''
  },
  errors: {}
};

export const ComponentContext = createContext(initalState);

export const EventProvider = ({ children }) => {
  return (
    <ComponentContext.Provider value={useReducer(reducer, initalState)}>
      {children}
    </ComponentContext.Provider>
  );
};

export const useEvent = () => useContext(ComponentContext);
