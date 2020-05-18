import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import Header from '../Header';
import Unanswered from '../Question/Unanswered';
import Answered from '../Question/Answered';

const QuestionPage = ({
  match: {
    params: { id }
  }
}) => {
  const answered = useSelector((state) => state.authedUser.answers[id]);

  return (
    <Container>
      <Header />
      {!answered && <Unanswered id={id} />}
      {answered && <Answered id={id} />}
    </Container>
  );
};

export default QuestionPage;
