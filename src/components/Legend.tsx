import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from './utils/helpers';
import { BaseProps, baseStyles } from './utils/system';

interface LegendProps extends BaseProps {
  children?: React.ReactNode;
  as?: string;
}

const styles = (props: LegendProps) => {
  const { color: cl, fontFamily, fontWeight: fw, lineHeight, mb } = props;
  const { color, fontWeight, marginBottom } = getTheme(props, 'legend');
  return css`
    color: ${cl || color};
    display: block;
    font-family: ${fontFamily || 'inherit'};
    font-weight: ${fw || fontWeight};
    line-height: ${lineHeight || baseStyles.lineHeight};
    margin-bottom: ${px(isDefined(mb) ? mb : marginBottom)};
    white-space: nowrap;
  `;
};

const Legend: React.FC<LegendProps> = styled(Box)`
  ${styles};
`;

Legend.defaultProps = {
  as: 'legend'
};

export default Legend;
