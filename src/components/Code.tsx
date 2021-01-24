import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from './utils/helpers';

type CodeProps = {
    as?: string;
};

const Code: React.FC<any> = styled(Box)(
    (
        props = {
            as: 'code'
        }
    ) => {
        const { bg, border: bd, borderRadius: br, fontFamily: ff, padding: pd } = props;
        const { backgroundColor, border, borderRadius, fontFamily, padding } = getTheme(
            props,
            'code'
        );
        return css`
            background-color: ${bg || backgroundColor};
            border: ${bd || border};
            border-radius: ${px(isDefined(br) ? br : borderRadius)};
            font-family: ${ff || fontFamily || ff};
            padding: ${px(isDefined(pd) ? pd : padding)};
        `;
    }
);

export default Code;
