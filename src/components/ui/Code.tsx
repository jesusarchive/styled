import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from '../utils/helpers';
import { BaseProps } from '../utils/types';

type CodeProps = BaseProps;

const styles = (props: CodeProps) => {
  const { bg, border: bd, borderRadius: br, fontFamily: ff, padding: pd } = props;
  const { backgroundColor, border, borderRadius, fontFamily, padding } = getTheme(props, 'code');
  return css`
    background-color: ${bg || backgroundColor};
    border: ${bd || border};
    border-radius: ${px(isDefined(br) ? br : borderRadius)};
    font-family: ${ff || fontFamily || ff};
    padding: ${px(isDefined(pd) ? pd : padding)};
  `;
};

const Code: React.FC<CodeProps> = styled(Box)`
  ${styles};
`;

Code.defaultProps = {
  as: 'code'
};

export default Code;
