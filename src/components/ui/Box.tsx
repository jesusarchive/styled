import React from 'react';
import styled from 'styled-components';
import { background, border, color, flexbox, grid, layout, position, space, typography } from 'styled-system';
import { BaseProps } from '../utils/types';

export type BoxProps = BaseProps;

const Box: React.FC<BoxProps> = styled.div`
  box-sizing: border-box;
  ${space}
  ${layout} 
  ${color} 
  ${border} 
  ${flexbox} 
  ${grid} 
  ${typography} 
  ${background}
  ${position};
`;

export default Box;
