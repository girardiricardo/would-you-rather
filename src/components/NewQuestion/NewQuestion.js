import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';

import { Container } from './styles';

import Box from '../Box';

const NewQuestion = () => {
  const [optionOne, setOptionOne] = useState(null);
  const [optionTwo, setOptionTwo] = useState(null);

  return (
    <Container>
      <Box>
        <h3>Create new question</h3>

        <span>Complete the question:</span>

        <h4>Would you rather...</h4>

        <form>
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
