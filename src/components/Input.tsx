import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from './utils/helpers';
import { BaseProps, formPseudo, inputTextTypes, OutlinesProps } from './utils/system';

interface InputProps extends BaseProps, OutlinesProps {
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
}

const styles = (props: InputProps) => {
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
    display: ${!['checkbox', 'radio'].includes(type as any) ? 'block' : 'inline-block'};
    font-family: ${fontFamily || 'inherit'};
    font-size: ${px(fz || fontSize[size as any])};
    ${inputTextTypes.includes(type as any) ? `height: ${h || px(height[size as any])}` : ''};
    line-height: ${lh || lineHeight};
    ${['checkbox', 'radio'].includes(type as any) ? `margin: 0 ${px(inlineMargin)} 0 0` : ''};
    padding: ${inputTextTypes.includes(type as any) ? px(isDefined(pd) ? pd : padding[size as any]) : 0};
    ${!['checkbox', 'radio', 'color'].includes(type as any) ? `width: ${width || '100%'}` : ''};

    &[type='file'] {
      font-size: ${px(fontSize[size as any] - 1)};
      padding: ${px(padding[size as any] - 1)};
    }
  `;
};

const Input: React.FC<InputProps> = styled(Box)`
  ${styles};
  ${formPseudo};
`;

Input.defaultProps = {
  as: 'input',
  bordered: true,
  size: 'md',
  type: 'text',
  value: undefined
};

export default Input;
