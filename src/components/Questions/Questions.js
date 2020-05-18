import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';

import QuestionCard from './components/QuestionCard';
import Box from '../Box';

import { Container, Header } from './styles';

function Questions() {
  const [tab, setTab] = useState('unanswered');
  const questions = useSelector((state) => state.questions);
  const user = useSelector((state) => state.authedUser);

  let unanswered =
    (user.answers &&
      Object.values(questions).filter(
        (question) =>
          !Object.keys(user.answers).find((answers) => answers === question.id)
      )) ||
    Object.values(questions);
  let answered =
    (user.answers &&
      Object.values(questions).filter(
        (question) =>
          user.answers &&
          Object.keys(user.answers).find((answers) => answers === question.id)
      )) ||
    [];

  return (
    <Container>
      <Box>
        <Header>
          <Button
            active={tab === 'unanswered'}
            fluid
            onClick={() => setTab('unanswered')}
          >
            Unanswered Questions
          </Button>
          <Button
            active={tab === 'answered'}
            fluid
            onClick={() => setTab('answered')}
          >
            Answered Questions
          </Button>
        </Header>
        {tab === 'unanswered' &&
          unanswered.map((question) => <QuestionCard question={question} />)}
        {tab === 'answered' &&
          answered.map((question) => <QuestionCard question={question} />)}
      </Box>
    </Container>
  );
}

export default Questions;
