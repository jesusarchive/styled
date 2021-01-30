import React from 'react';
import styled, { css } from 'styled-components';
import Box from '../ui/Box';
import { getTheme, isDefined, px } from '../utils/helpers';
import { baseStyles } from '../utils/system';
import { BaseProps, WithInline } from '../utils/types';

interface LabelProps extends BaseProps, WithInline {}

const styles = (props: LabelProps) => {
  const { color: cl, fontFamily, fontSize, fontWeight: fw, inline, lineHeight, mb } = props;
  const { color, fontWeight, inlineFontSize, marginBottom } = getTheme(props, 'label');
  return css`
    align-items: center;
    color: ${cl || color};
    display: flex;
    font-family: ${fontFamily || 'inherit'};
    font-weight: ${fw || fontWeight};
    ${inline ? `font-size: ${px(fontSize || inlineFontSize)}` : ''};
    line-height: ${(lineHeight as any) || baseStyles.lineHeight};
    ${!inline ? `margin-bottom: ${px(isDefined(mb) ? mb : marginBottom)}` : ''};
    white-space: nowrap;
  `;
};

const Label: React.FC<LabelProps> = styled(Box)`
  ${styles};
`;

Label.defaultProps = {
  as: 'label'
};

export default Label;
