import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.authedUser);

  return user ? children : <Redirect to="/login" />;
};

export default PrivateRoute;
