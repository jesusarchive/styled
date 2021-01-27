import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { BaseProps } from './utils/system';

interface EmbedProps extends BaseProps {
  children?: React.ReactNode;
  ratio?: number;
}

const StyledEmbed = styled(Box)`
  overflow: hidden;
  position: relative;
  width: 100%;

  & > iframe {
    border: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const Embed: React.FC<EmbedProps> = ({ children, ...props }: any) => (
  <StyledEmbed dangerouslySetInnerHTML={{ __html: children }} {...props} />
);

Embed.defaultProps = {
  ratio: 9 / 16
};

export default Embed;
