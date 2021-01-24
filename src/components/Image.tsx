import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { BaseProps } from './utils/system';

interface ImageProps extends BaseProps {
  alt: string;
  as?: string;
  src: string;
}

const Image: React.FC<ImageProps> = styled(Box)((props) => {
  const { maxWidth = '100%' } = props;
  return css`
    max-width: ${maxWidth as any};
  `;
});

Image.defaultProps = {
  as: 'img'
};

export default Image;
