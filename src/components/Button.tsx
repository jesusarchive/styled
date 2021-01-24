/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components';
import Box from './Box';
import { getColor, getStyles, getTheme, isDefined, px } from './utils/helpers';
import {
    BaseProps,
    baseStyles,
    outlines,
    OutlinesProps,
    SizesAllTypes,
    VariantTypes
} from './utils/system';

const styles = (props: any) => {
    const { animate, borderRadius: br, lineHeight: lh, bordered, size } = props;
    const { borderRadius, lineHeight, loader, padding } = getTheme(props, 'button');
    return css`
        ${baseStyles.variant};
        align-items: center;
        border-radius: ${px(isDefined(br) ? br : borderRadius[size])};
        box-shadow: none;
        cursor: pointer;
        display: inline-flex;
        font-family: inherit;
        font-size: ${baseStyles.fontSize};
        justify-content: center;
        line-height: ${lh || lineHeight};
        padding: ${px(padding[size][0])} ${px(padding[size][1])};
        text-decoration: none;
        width: ${({ block }: any) => (block ? '100%' : 'auto')};
        ${animate ? loader(bordered ? '#ccc' : '#fff') : ''};
    `;
};

const buttonTypes = ['button', 'submit', 'reset'];

type ButtonTypes = typeof buttonTypes[number];

interface ButtonProps extends BaseProps, OutlinesProps {
    children?: React.ReactNode;
    animate?: boolean;
    as?: string;
    block?: boolean;
    bordered?: boolean;
    dark?: boolean;
    disabled?: boolean;
    onClick?: (...args: any[]) => any;
    size?: SizesAllTypes;
    type?: ButtonTypes;
    variant?: VariantTypes;
}

const Button: React.FC<ButtonProps> = styled(Box)`
    ${styles};

    &:disabled {
        pointer-events: none;
        opacity: ${getStyles('button', 'disabledOpacity')};
    }

    &:focus {
        outline-color: ${getColor};
        ${outlines}
    }
`;

Button.defaultProps = {
    animate: false,
    as: 'button',
    block: false,
    bordered: false,
    dark: false,
    disabled: false,
    size: 'md',
    type: 'button',
    variant: 'primary'
};

export default Button;
