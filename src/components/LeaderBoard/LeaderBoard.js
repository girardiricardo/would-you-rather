import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import Position from './components/Position';

const LeaderBoard = () => {
  const users = useSelector((state) => state.users);

  const ranking = Object.values(users)
    .map((user) => ({
      user,
      answers: (user.answers && Object.keys(user.answers).length) || 0,
      questions: (user.questions && user.questions.length) || 0,
      score:
        ((user.answers && Object.keys(user.answers).length) || 0) +
        ((user.questions && user.questions.length) || 0)
    }))
    .sort((a, b) => (a.score > b.score ? -1 : 1));

  console.log(ranking);

  return (
    <Container>
      {ranking.map((value) => (
        <Position data={value} />
      ))}
    </Container>
  );
};

export default LeaderBoard;
