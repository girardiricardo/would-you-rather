import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

const QuestionCard = ({ question }) => {
  const author = useSelector((state) =>
    Object.values(state.users).find((u) => u.id === question.author)
  );

  return (
    <Container>
      <Content>
        <div>
          <h2>{author.name} asks..</h2>
          <h4>Would you rather?</h4>
          <span>..{question.optionOne.text}..?</span>
        </div>
        <img src={author.avatarURL} alt={`${author.name} avatar`} />
      </Content>
      <Link to={`/questions/${question.id}`}>
        <Button fluid type="button">
          View poll
        </Button>
      </Link>
    </Container>
  );
};

export default QuestionCard;
