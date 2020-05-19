import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Radio } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import { handleVoteQuestion } from '../../../actions/questions';
import { handleUpdateUserAnswers } from '../../../actions/users';
import { updateAnswers } from '../../../actions/authedUser';

import { Container, Content } from './styles';

import Box from '../../Box';

const Unanswered = ({ id }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.questions[id]);
  const author = useSelector((state) => state.users[question.author]);

  const [option, setOption] = useState(null);

  const handleSubmitVote = async (e) => {
    e.preventDefault();

    dispatch(handleVoteQuestion(id, option));
    dispatch(handleUpdateUserAnswers(id, option));
    dispatch(updateAnswers({ id, option }));

    history.push('/');
  };

  return (
    <Container>
      <Box>
        <Content>
          <div>
            <h2>{author.name} asks..</h2>
            <h4>Would you rather?</h4>
            <Radio
              label={question.optionOne.text}
              name="option"
              value="optionOne"
              checked={option === 'optionOne'}
              onChange={(e, { value }) => setOption(value)}
            />
            <Radio
              label={question.optionTwo.text}
              name="option"
              value="optionTwo"
              checked={option === 'optionTwo'}
              onChange={(e, { value }) => setOption(value)}
            />
          </div>
          <img src={author.avatarURL} alt={`${author.name} avatar`} />
        </Content>
        <Button
          fluid
          type="button"
          disabled={!option}
          onClick={handleSubmitVote}
        >
          Vote
        </Button>
      </Box>
    </Container>
  );
};

export default Unanswered;
