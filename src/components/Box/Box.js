import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Box = ({ children, orientation }) => {
  return <Container orientation={orientation}>{children}</Container>;
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string
};

Box.defaultProps = {
  orientation: 'column'
};

export default Box;
