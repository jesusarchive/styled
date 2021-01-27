import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { BaseProps } from './utils/system';

interface TextProps extends BaseProps {
  children?: React.ReactNode;
  as?: string;
}

const Text: React.FC<TextProps> = styled(Box)``;

Text.defaultProps = {
  as: 'span'
};

export default Text;
