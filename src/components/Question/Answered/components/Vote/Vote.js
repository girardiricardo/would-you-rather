import React from 'react';
import { Progress } from 'semantic-ui-react';

import { Container, Header } from './styles';

const Vote = ({ option, vote, votes }) => {
  const optionVotes = option.votes.length;

  return (
    <Container active={vote}>
      <Header>
        <h3>Would you rather {option.text}? </h3>
        {vote && (
          <span>
            YOUR
            <br />
            VOTE
          </span>
        )}
      </Header>
      <Progress
        value={optionVotes}
        total={votes}
        progress="ratio"
        size="large"
      >
        {optionVotes} of {votes}
      </Progress>
    </Container>
  );
};

export default Vote;
