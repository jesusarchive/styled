import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { spacer } from './utils/helpers';
import { BaseProps } from './utils/system';

interface ParagraphProps extends BaseProps {
  children?: React.ReactNode;
  as?: string;
}

const Paragraph: React.FC<ParagraphProps> = styled(Box)`
  & + & {
    margin-top: ${spacer(2)};
  }
`;

Paragraph.defaultProps = {
  as: 'p',
  mb: '0',
  mt: '0'
};

export default Paragraph;
