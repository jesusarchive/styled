import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px, spacer } from './utils/helpers';
import { BaseProps } from './utils/system';

interface FieldsetProps extends BaseProps {
  children?: React.ReactNode;
  as?: string;
  inline?: boolean;
}

const styles = (props: FieldsetProps) => {
  const { borderColor, borderRadius: br, padding, marginBottom } = getTheme(props, 'fieldset');
  const { borderRadius = br, inline, mb, ml, padding: pd } = props;
  return css`
    border: 1px solid ${borderColor};
    border-radius: ${px(isDefined(br) ? br : borderRadius)};
    margin-bottom: ${px(isDefined(mb) ? mb : marginBottom)};
    padding: ${px(isDefined(pd) ? pd : padding)};
    text-align: left;

    > *:not(legend) {
      ${inline ? 'display: inline-block;' : ''};

      + * {
        ${inline ? `margin-left: ${px(isDefined(ml) ? ml : spacer(2))} ;` : ''};
      }
    }
  `;
};

const Fieldset: React.FC<FieldsetProps> = styled(Box)`
  ${styles};
`;

Fieldset.defaultProps = {
  as: 'fieldset',
  inline: false
};

export default Fieldset;
