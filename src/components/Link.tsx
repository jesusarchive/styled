import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { getColor, getDimmerColor } from './utils/helpers';
import { BaseProps, VariantTypes } from './utils/system';

interface LinkProps extends BaseProps {
  as?: string;
  href: string;
  variant?: VariantTypes;
}

const styles = (props: LinkProps) => {
  const { color } = props;
  const currentColor = color || getColor(props);
  return css`
    color: ${currentColor as any};

    &:visited {
      color: ${getDimmerColor(currentColor as any)};
    }
  `;
};

const Link: React.FC<LinkProps> = styled(Box)`
  ${styles};
`;

Link.defaultProps = {
  as: 'a'
};

export default Link;
