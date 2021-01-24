import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from './utils/helpers';
import { baseStyles } from './utils/system';

type LabelProps = {
    as?: string;
    inline?: boolean;
};

const Label: React.FC<any> = styled(Box)(
    (
        props = {
            as: 'label'
        }
    ) => {
        const { color: cl, fontFamily, fontSize, fontWeight: fw, inline, lineHeight, mb } = props;
        const { color, fontWeight, inlineFontSize, marginBottom } = getTheme(props, 'label');
        return css`
            align-items: center;
            color: ${cl || color};
            display: flex;
            font-family: ${fontFamily || 'inherit'};
            font-weight: ${fw || fontWeight};
            ${inline ? `font-size: ${px(fontSize || inlineFontSize)}` : ''};
            line-height: ${lineHeight || baseStyles.lineHeight};
            ${!inline ? `margin-bottom: ${px(isDefined(mb) ? mb : marginBottom)}` : ''};
            white-space: nowrap;
        `;
    }
);

export default Label;
