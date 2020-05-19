import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Header } from './styles';

import Vote from './components/Vote';
import Box from '../../Box';

const Answered = ({ id }) => {
  const question = useSelector((state) => state.questions[id]);
  const author = useSelector((state) => state.users[question.author]);
  const vote = useSelector((state) => state.authedUser.answers[id]);
  const votes =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  return (
    <Container>
      <Box>
        <Header>
          <h2>{author.name} asks..</h2>
          <img src={author.avatarURL} alt={`${author.name} avatar`} />
        </Header>
        <Vote
          option={question.optionOne}
          vote={vote === 'optionOne'}
          votes={votes}
        />
        <Vote
          option={question.optionTwo}
          vote={vote === 'optionTwo'}
          votes={votes}
        />
      </Box>
    </Container>
  );
};

export default Answered;
