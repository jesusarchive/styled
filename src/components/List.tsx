import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, px } from './utils/helpers';
import { BaseProps, SizesTypes } from './utils/system';

interface ListProps extends BaseProps {
  children?: React.ReactNode;
  as?: 'ul' | 'ol';
  bordered?: boolean;
  inline?: boolean;
  reversed?: boolean;
  size?: SizesTypes;
  start?: number;
  styleType?: ('disc' | 'circle' | 'square' | 'decimal' | 'lower-alpha' | 'none') | string;
  type?: '1' | 'a' | 'A' | 'i' | 'I';
}

const stylesItem = (props: ListProps) => {
  const { bordered, size } = props;
  const { padding } = getTheme(props, 'list');
  return css`
    padding: ${bordered ? px(padding[size as any]) : 0};
  `;
};

const stylesSibling = (props: ListProps) => {
  const { bordered, size } = props;
  const { borderColor, padding } = getTheme(props, 'list');
  return css`
    border-top: ${bordered ? `1px solid ${borderColor}` : 'none'};
    margin-top: ${!bordered ? px(padding[size as any]) : 0};
  `;
};

const styles = (props: ListProps) => {
  const { as, bordered, inline, m, styleType } = props;
  const { borderColor, borderRadius } = getTheme(props, 'list');
  return css`
    ${bordered ? `border: 1px solid ${borderColor};` : ''};
    ${bordered ? `border-radius: ${px(borderRadius)};` : ''};
    display: flex;
    flex-direction: ${inline ? 'row' : 'column'};
    margin: ${String(m || 0)};
    ${as === 'ul' && styleType === 'none' ? 'padding: 0;' : ''};
    ${as === 'ul' ? `list-style-type: ${styleType};` : ''};

    > li {
      ${stylesItem}

      + li {
        ${stylesSibling}
      }
    }
  `;
};

const List: React.FC<ListProps> = styled(Box)`
  ${styles};
`;

List.defaultProps = {
  as: 'ul',
  bordered: false,
  inline: false,
  size: 'md',
  styleType: 'none',
  type: '1'
};

export default List;
