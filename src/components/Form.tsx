import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, px } from './utils/helpers';
import { BaseProps } from './utils/system';

interface FormProps extends BaseProps {
  children?: React.ReactNode;
  action?: string;
  as?: string;
  bordered?: boolean;
  enctype?: string;
  method?: 'get' | 'post';
  target?: string;
}

const styles = (props: FormProps) => {
  const { bordered, textAlign } = props;
  const { borderColor, borderRadius, padding } = getTheme(props, 'form');
  return css`
    ${bordered ? `border: 1px solid ${borderColor};` : ''}
    ${bordered ? `border-radius: ${px(borderRadius)};` : ''}
    ${bordered ? `padding: ${px(padding)};` : ''}
    text-align: ${textAlign || 'left'};
  `;
};

const Form: React.FC<FormProps> = styled(Box)`
  ${styles};
`;

Form.defaultProps = {
  as: 'form',
  bordered: false
};

export default Form;
