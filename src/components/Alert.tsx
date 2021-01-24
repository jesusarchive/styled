import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from './utils/helpers';
import { baseStyles } from './utils/system';

type AlertProps = {
    as?: string;
    bordered?: boolean;
    dark?: boolean;
    size?: any;
    variant?: any;
};

const Alert: React.FC<any> = styled(Box).attrs({
    role: 'alert'
})(
    (
        props = {
            bordered: false,
            dark: false,
            size: 'md',
            variant: 'primary'
        }
    ) => {
        const { borderRadius: br, lineHeight, size, width } = props as any;
        const { borderRadius, maxWidth, padding } = getTheme(props, 'alert');
        return css`
            ${baseStyles.variant};
            border-radius: ${px(isDefined(br) ? br : borderRadius)};
            font-size: ${baseStyles.fontSize};
            line-height: ${lineHeight || baseStyles.lineHeight};
            max-width: ${px(maxWidth)};
            padding: ${px(padding[size][0])} ${px(padding[size][1])};
            width: ${width || '100%'};

            a {
                ${baseStyles.color};
            }
        `;
    }
);

export default Alert;
