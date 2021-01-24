import styled, { css } from 'styled-components';
import Badge from './Badge';
import Box from './Box';
import { getColor, getStyles, getTheme, isDefined, px } from './utils/helpers';
import { baseStyles, outlines } from './utils/system';

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

type ButtonProps = {
    animate?: boolean;
    as?: string;
    block?: boolean;
    bordered?: boolean;
    dark?: boolean;
    disabled?: boolean;
    onClick?: (...args: any[]) => any;
    size?: any;
    type?: 'button' | 'submit' | 'reset';
    variant?: any;
};

const Button: React.FC<any> = styled(Box)`
    ${styles};

    &:disabled {
        pointer-events: none;
        opacity: ${getStyles('button', 'disabledOpacity')};
    }

    &:focus {
        outline-color: ${getColor};
        ${outlines}
    }

    ${Badge as any} {
        margin-left: 5px;
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
