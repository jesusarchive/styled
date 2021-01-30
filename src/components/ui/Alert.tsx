import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, px } from '../utils/helpers';
import { baseStyles } from '../utils/system';
import { BaseProps, WithDark, WithVariant } from '../utils/types';

interface AlertProps extends BaseProps, WithDark, WithVariant {
  bordered?: boolean;
}

const styles = (props: AlertProps) => {
  const { borderRadius: br, maxWidth, padding } = getTheme(props, 'alert');
  const { borderRadius = br, lineHeight, size, width } = props;
  return css`
    ${baseStyles.variant};
    border-radius: ${px(borderRadius)};
    font-size: ${baseStyles.fontSize};
    line-height: ${px(lineHeight as any) || baseStyles.lineHeight};
    max-width: ${px(maxWidth)};
    padding: ${px(padding[size as any][0])} ${px(padding[size as any][1])};
    width: ${px(width as any) || '100%'};

    a {
      ${baseStyles.color};
    }
  `;
};

const Alert: React.FC<AlertProps> = styled(Box)`
  ${styles};
`;

Alert.defaultProps = {
  bordered: false,
  dark: false,
  size: 'md',
  variant: 'primary'
};

export default Alert;
