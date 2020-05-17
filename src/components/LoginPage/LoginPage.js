import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Button } from 'semantic-ui-react';
import { handleSetAuthedUser } from '../../actions/authedUser';

import { Container } from './styles';

import Box from '../Box';

const LoginPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [user, setUser] = useState(null);

  const options = Object.values(users).map((u) => ({
    key: u.id,
    text: u.name,
    value: u.id,
    image: { avatar: true, src: u.avatarURL }
  }));

  return (
    <Container>
      <Box>
        <h2>Welcome to the Would You Rather app</h2>
        <span>Please sign in to continue</span>

        <Dropdown
          placerholder="Select a user"
          fluid
          selection
          value={user}
          options={options}
          onChange={(_, { value }) => setUser(value)}
        />

        <Button
          type="button"
          fluid
          onClick={() => dispatch(handleSetAuthedUser(user))}
          disabled={!user}
        >
          Sign in
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
