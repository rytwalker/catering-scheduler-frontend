import React from 'react';

export default React.createContext({
  events: [],
  step: 3,
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
});
