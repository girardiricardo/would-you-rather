import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setLogoffUser } from '../../actions/authedUser';

import { Container } from './styles';

import Box from '../Box';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.authedUser);

  const handleLogout = () => {
    dispatch(setLogoffUser());

    history.push('/');
  };

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
          <li onClick={handleLogout} className="active">
            Logout
          </li>
        </ul>
      </Box>
    </Container>
  );
};

export default Header;
