import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { isDefined, spacer } from './utils/helpers';
import { BaseProps } from './utils/system';

interface ParagraphProps extends BaseProps {
    children?: React.ReactNode;
    as?: string;
}

const Paragraph: React.FC<ParagraphProps> = styled(Box)(
    ({ mb, mt }: any) => css`
        margin-bottom: ${isDefined(mb) ? mb : 0};
        margin-top: ${isDefined(mt) ? mt : 0};

        & + & {
            margin-top: ${spacer(2)};
        }
    `
);

Paragraph.defaultProps = {
    as: 'p'
};

export default Paragraph;
