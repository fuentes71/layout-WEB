import React from 'react';
import { AuthContext } from '../contexts/auth';

const UseAuth = () => {
  const context = React.useContext(AuthContext);
  return context;
};

export default UseAuth;
