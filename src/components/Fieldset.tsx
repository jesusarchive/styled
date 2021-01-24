import styled, { css } from 'styled-components';
import Box from './Box';
import Legend from './Legend';
import { getTheme, isDefined, px, spacer } from './utils/helpers';

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

type FieldsetProps = {
    as?: string;
    inline?: boolean;
};

const Fieldset: React.FC<any> = styled(Box)`
    ${styles};

    ${Legend as any} {
        margin: 0;
    }
`;

Fieldset.defaultProps = {
    as: 'fieldset',
    inline: false
};
export default Fieldset;
