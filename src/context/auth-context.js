import React from 'react';

export default React.createContext({
  token: null,
  userId: null,
  login: (token, user_id, tokenExpiration) => {},
  logout: () => {}
});
