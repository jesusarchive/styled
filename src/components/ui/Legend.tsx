import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from '../utils/helpers';
import { baseStyles } from '../utils/system';
import { BaseProps } from '../utils/types';

type LegendProps = BaseProps;

const styles = (props: LegendProps) => {
  const { color: cl, fontFamily, fontWeight: fw, lineHeight, mb } = props;
  const { color, fontWeight, marginBottom } = getTheme(props, 'legend');
  return css`
    color: ${cl || color};
    display: block;
    font-family: ${fontFamily || 'inherit'};
    font-weight: ${fw || fontWeight};
    line-height: ${(lineHeight as any) || baseStyles.lineHeight};
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
