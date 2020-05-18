import React from 'react';

import { Container } from './styles';

import Header from '../Header';
import LeaderBoard from '../LeaderBoard';

function LeaderBoardPage() {
  return (
    <Container>
      <Header />
      <LeaderBoard />
    </Container>
  );
}

export default LeaderBoardPage;
