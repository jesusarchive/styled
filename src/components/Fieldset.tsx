import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px, spacer } from './utils/helpers';

interface FieldsetProps {
    children?: React.ReactNode;
    as?: string;
    inline?: boolean;
}

const styles = (props: any) => {
    const { borderRadius: br, inline, mb, ml, padding: pd } = props;
    const { borderColor, borderRadius, padding, marginBottom } = getTheme(props, 'fieldset');
    return css`
        border: 1px solid ${borderColor};
        border-radius: ${px(isDefined(br) ? px(br) : borderRadius)};
        margin-bottom: ${px(isDefined(mb) ? mb : marginBottom)};
        padding: ${px(isDefined(pd) ? pd : padding)};
        text-align: left;

        > *:not(legend) {
            ${inline ? 'display: inline-block;' : ''};

            + * {
                ${inline ? `margin-left: ${isDefined(ml) ? px(ml) : spacer(2)} ;` : ''};
            }
        }
    `;
};

const Fieldset: React.FC<FieldsetProps> = styled(Box)`
    ${styles};
`;

Fieldset.defaultProps = {
    as: 'fieldset',
    inline: false
};

export default Fieldset;
