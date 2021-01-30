import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { BaseProps } from '../utils/types';

type FlexProps = BaseProps;

const Flex: React.FC<FlexProps> = styled(Box)``;

Flex.defaultProps = {
  display: 'flex',
  alignItems: 'center'
};

export default Flex;
