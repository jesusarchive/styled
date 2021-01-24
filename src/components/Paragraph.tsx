import styled, { css } from 'styled-components';
import Box from './Box';
import { isDefined, spacer } from './utils/helpers';

type ParagraphProps = {
    as?: string;
};

const Paragraph: React.FC<any> = styled(Box)(
    (
        { mb, mt } = {
            as: 'p'
        }
    ) => css`
        margin-bottom: ${isDefined(mb) ? mb : 0};
        margin-top: ${isDefined(mt) ? mt : 0};

        & + & {
            margin-top: ${spacer(2)};
        }
    `
);

export default Paragraph;
