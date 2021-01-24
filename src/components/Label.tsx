import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from './utils/helpers';
import { BaseProps, baseStyles } from './utils/system';

interface LabelProps extends BaseProps {
  children?: React.ReactNode;
  as?: string;
  inline?: boolean;
}

const Label: React.FC<LabelProps> = styled(Box)((props: any) => {
  const { color: cl, fontFamily, fontSize, fontWeight: fw, inline, lineHeight, mb } = props;
  const { color, fontWeight, inlineFontSize, marginBottom } = getTheme(props, 'label');
  return css`
    align-items: center;
    color: ${cl || color};
    display: flex;
    font-family: ${fontFamily || 'inherit'};
    font-weight: ${fw || fontWeight};
    ${inline ? `font-size: ${px(fontSize || inlineFontSize)}` : ''};
    line-height: ${lineHeight || baseStyles.lineHeight};
    ${!inline ? `margin-bottom: ${px(isDefined(mb) ? mb : marginBottom)}` : ''};
    white-space: nowrap;
  `;
});

Label.defaultProps = {
  as: 'label'
};

export default Label;
