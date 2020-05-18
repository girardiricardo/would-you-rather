import React from 'react';

import { Container } from './styles';

import Box from '../../../Box';

function Position({ data: { user, answers, questions, score } }) {
  return (
    <Container>
      <Box orientation="row">
        <div>
          <h2>{user.name}</h2>
          <div>
            <span>
              Answered questions {answers}
              <br />
              Created questions {questions}
            </span>
            <h3>Score {score}</h3>
          </div>
        </div>
        <img src={user.avatarURL} alt={`${user.name} avatar`} />
      </Box>
    </Container>
  );
}

export default Position;
