import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from './utils/helpers';
import { baseStyles } from './utils/system';

type BadgeProps = {
    as?: string;
    bordered?: boolean;
    dark?: boolean;
    size?: any;
    variant?: any;
};

const Badge: React.FC<any> = styled(Box)(
    (
        props = {
            as: 'span',
            dark: false,
            bordered: false,
            variant: 'primary'
        }
    ) => {
        const {
            borderRadius: radii,
            fontSize: fz,
            fontWeight: fw,
            lineHeight,
            size
        } = props as any;
        const { borderRadius, fontSize, fontWeight, padding } = getTheme(props, 'badge');
        return css`
            ${baseStyles.variant};
            border-radius: ${px(isDefined(radii) ? radii : borderRadius)};
            display: inline-flex;
            font-size: ${fz || fontSize};
            ${size ? `font-size: ${baseStyles.fontSize}` : ''};
            font-weight: ${fw || fontWeight};
            line-height: ${lineHeight || 1};
            padding: ${px(padding[0])} ${px(padding[1])};
            vertical-align: baseline;
        `;
    }
);

export default Badge;
