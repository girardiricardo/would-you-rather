import React from 'react';

import { Container } from './styles';

import Header from '../Header';
import Questions from '../Questions';

function QuestionsPage() {
  return (
    <Container>
      <Header />
      <Questions />
    </Container>
  );
}

export default QuestionsPage;
