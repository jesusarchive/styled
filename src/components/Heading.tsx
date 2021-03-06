import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px, spacer } from './utils/helpers';
import { BaseProps, baseStyles } from './utils/system';

interface HeadingProps extends BaseProps {
  children?: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  gutterBottom?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const styles = (props: HeadingProps) => {
  const { as, fontFamily, fontSize, fontWeight, level, lineHeight, gutterBottom, mb, mt } = props;
  const headingWeight = getTheme(props, 'headingWeight');
  const marginTop = gutterBottom ? spacer(3) : 0;
  let headingSize = getTheme(props, 'headingSizes')[as as any];
  if (level) {
    headingSize = getTheme(props, 'headingSizes')[`h${level}`];
  }
  return css`
    font-size: ${(fontSize as any) || px(headingSize)};
    font-family: ${fontFamily || 'inherit'};
    font-weight: ${fontWeight || headingWeight};
    line-height: ${(lineHeight as any) || baseStyles.lineHeight};
    margin-bottom: ${isDefined(mb) ? px(mb as any) : marginTop};
    margin-top: ${isDefined(mt) ? px(mt as any) : spacer(3)};

    &:first-child {
      margin-top: ${isDefined(mt) ? px(mt as any) : 0};
    }
  `;
};

const Heading: React.FC<HeadingProps> = styled(Box)`
  ${styles};
`;

Heading.defaultProps = {
  as: 'h1'
};

export default Heading;
