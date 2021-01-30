import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { BaseProps } from '../utils/types';

type ScreenProps = BaseProps;

const Screen: React.FC<ScreenProps> = styled(Box)``;

Screen.defaultProps = {
  minHeight: '100vh'
};

export default Screen;
