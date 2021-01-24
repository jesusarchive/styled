/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from './utils/helpers';
import { BaseProps, baseStyles, SizesTypes, VariantTypes } from './utils/system';

interface AlertProps extends BaseProps {
    children?: React.ReactNode;
    as?: string;
    bordered?: boolean;
    dark?: boolean;
    size?: SizesTypes;
    variant?: VariantTypes;
}

const Alert: React.FC<AlertProps> = styled(Box).attrs({
    role: 'alert'
})((props) => {
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
});

Alert.defaultProps = {
    bordered: false,
    dark: false,
    size: 'md',
    variant: 'primary'
};

export default Alert;
