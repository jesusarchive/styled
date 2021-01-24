import React from 'react';
import styled from 'styled-components';
import Box from './Box';

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

type EmbedProps = {
    ratio?: number;
};

const Embed: React.FC<any> = (
    { children, ...props }: any = {
        ratio: 9 / 16
    }
) => <StyledEmbed dangerouslySetInnerHTML={{ __html: children }} {...props} />;

export default Embed;
