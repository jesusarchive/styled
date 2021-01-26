import React from 'react';
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

const styles = (props: AlertProps) => {
  const { borderRadius: br, lineHeight, size, width } = props;
  const { borderRadius, maxWidth, padding } = getTheme(props, 'alert');

  return css`
    ${baseStyles.variant};
    border-radius: ${px(isDefined(br) ? br : borderRadius)};
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

const Alert: React.FC = styled(Box)<AlertProps>`
  ${styles};
`;

Alert.defaultProps = {
  bordered: false,
  dark: false,
  size: 'md',
  variant: 'primary'
};

export default Alert;
