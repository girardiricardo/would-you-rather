import React from 'react';

import { Container } from './styles';

import Header from '../Header';
import NewQuestion from '../NewQuestion';

function NewQuestionPage() {
  return (
    <Container>
      <Header />
      <NewQuestion />
    </Container>
  );
}

export default NewQuestionPage;
