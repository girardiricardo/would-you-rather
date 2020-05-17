import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import Box from '../Box';

const Header = () => {
  const user = useSelector((state) => state.authedUser);

  return (
    <Container>
      <h1>Would you rather?</h1>

      <Box orientation="row">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">New question</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leader Board</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            Hello, {user.name}
            <img
              className="avatar"
              src={user.avatarURL}
              alt={`${user.name} avatar`}
            />
          </li>
          <li>
            <NavLink to="/logout" className="active">
              Logout
            </NavLink>
          </li>
        </ul>
      </Box>
    </Container>
  );
};

export default Header;
