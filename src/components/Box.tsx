import React from 'react';
import styled from 'styled-components';
import { background, border, color, flexbox, grid, layout, position, space, typography } from 'styled-system';
import { BaseProps } from './utils/system';

export interface BoxProps extends BaseProps {
  children?: React.ReactNode;
  as?: string;
}

const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box'
  },
  space,
  layout,
  color,
  border,
  flexbox,
  grid,
  typography,
  background,
  position
);

export default Box;
