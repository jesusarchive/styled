import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { BaseProps } from '../utils/types';

type TextProps = BaseProps;

const Text: React.FC<TextProps> = styled(Box)``;

Text.defaultProps = {
  as: 'span'
};

export default Text;
