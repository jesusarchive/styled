import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from './utils/helpers';
import { formPseudo, inputTextTypes } from './utils/system';

const styles = (props: any) => {
    const {
        bg,
        bordered,
        borderColor: bc,
        borderRadius: br,
        borderWidth: bw,
        color: cl,
        fontFamily,
        fontSize: fz,
        height: h,
        lineHeight: lh,
        padding: pd,
        size,
        type,
        valid,
        width
    } = props;
    const {
        backgroundColor,
        borderColor,
        borderRadius,
        borderWidth,
        color,
        fontSize,
        height,
        inlineMargin,
        lineHeight,
        padding,
        validation
    } = getTheme(props, 'input');
    let currentBorderColor = bc || borderColor;
    if (valid) {
        currentBorderColor = validation.valid;
    } else if (valid === false) {
        currentBorderColor = validation.invalid;
    }
    return css`
        background-color: ${bg || backgroundColor};
        border: ${bordered ? `${px(bw || borderWidth)} solid ${currentBorderColor}` : 0};
        border-radius: ${px(isDefined(br) ? br : borderRadius)};
        color: ${cl || color};
        display: ${!['checkbox', 'radio'].includes(type) ? 'block' : 'inline-block'};
        font-family: ${fontFamily || 'inherit'};
        font-size: ${px(fz || fontSize[size])};
        ${inputTextTypes.includes(type) ? `height: ${h || px(height[size])}` : ''};
        line-height: ${lh || lineHeight};
        ${['checkbox', 'radio'].includes(type) ? `margin: 0 ${px(inlineMargin)} 0 0` : ''};
        padding: ${inputTextTypes.includes(type) ? px(isDefined(pd) ? pd : padding[size]) : 0};
        ${!['checkbox', 'radio', 'color'].includes(type) ? `width: ${width || '100%'}` : ''};

        &[type='file'] {
            font-size: ${px(fontSize[size] - 1)};
            padding: ${px(padding[size] - 1)};
        }
    `;
};

type InputProps = {
    accept?: string;
    as?: string;
    autoComplete?: string;
    bordered?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    defaultValue?: number | string;
    disabled?: boolean;
    id?: string;
    maxLength?: number;
    minLength?: number;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: 'sm' | 'md' | 'lg';
    tabindex?: number;
    type?:
        | 'checkbox'
        | 'color'
        | 'date'
        | 'email'
        | 'file'
        | 'hidden'
        | 'number'
        | 'password'
        | 'radio'
        | 'search'
        | 'tel'
        | 'text';
    valid?: boolean;
    value?: string | number;
};

const Input: React.FC<any> = styled(Box).attrs(
    (
        { id, name } = {
            as: 'input',
            bordered: true,
            size: 'md',
            type: 'text',
            value: undefined
        }
    ) => ({
        id: id || name
    })
)`
    ${styles};
    ${formPseudo};
`;

export default Input;
