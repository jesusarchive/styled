import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { BaseProps } from './utils/system';

interface ImageProps extends BaseProps {
  alt: string;
  as?: string;
  src: string;
}

const Image: React.FC<ImageProps> = styled(Box)``;

Image.defaultProps = {
  as: 'img',
  maxWidth: '100%'
};

export default Image;
