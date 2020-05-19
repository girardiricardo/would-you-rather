import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Input, Button } from 'semantic-ui-react';

import { handleAddQuestion } from '../../actions/shared';

import { Container } from './styles';

import Box from '../Box';

const NewQuestion = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const handleCreateQuestion = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(optionOne.toLowerCase(), optionTwo.toLowerCase()));

    history.push('/');
  }

  return (
    <Container>
      <Box>
        <h3>Create new question</h3>

        <span>Complete the question:</span>

        <h4>Would you rather...</h4>

        <form onSubmit={handleCreateQuestion}>
          <Input
            placeholder="Option one"
            value={optionOne}
            onChange={(e) => setOptionOne(e.target.value)}
            required
          />
          <small>OR</small>
          <Input
            placeholder="Option two"
            value={optionTwo}
            onChange={(e) => setOptionTwo(e.target.value)}
            required
          />
          <Button type="submit" fluid>
            Create question
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default NewQuestion;
