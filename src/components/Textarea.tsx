/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from './utils/helpers';
import { BaseProps, formPseudo, OutlinesProps, SizesTypes } from './utils/system';

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
        lineHeight: lh,
        padding: pd,
        size,
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
        lineHeight,
        padding,
        validation
    } = getTheme(props, 'textarea');
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
        display: block;
        font-family: ${fontFamily || 'inherit'};
        font-size: ${px(fz || fontSize[size])};
        line-height: ${lh || lineHeight};
        margin: 0;
        padding: ${px(isDefined(pd) ? pd : padding[size])};
        width: ${width || '100%'};
    `;
};

interface TextareaProps extends BaseProps, OutlinesProps {
    as?: string;
    bordered?: boolean;
    defaultValue?: number | string;
    disabled?: boolean;
    id?: string;
    maxlength?: number;
    minlength?: number;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    size?: SizesTypes;
    tabindex?: number;
    valid?: boolean;
    value?: string;
    wrap?: 'soft' | 'hard';
}

const Textarea: React.FC<any> = styled(Box).attrs(({ id, name }: any) => ({
    id: id || name
}))`
    ${styles};
    ${formPseudo};
`;

Textarea.defaultProps = {
    as: 'textarea',
    bordered: true,
    rows: 3,
    size: 'md'
};

export default Textarea;
