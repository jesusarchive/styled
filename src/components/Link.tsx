import styled, { css } from 'styled-components';
import Box from './Box';
import { getColor, getDimmerColor } from './utils/helpers';
import { BaseProps, VariantTypes } from './utils/system';

interface LinkProps extends BaseProps {
    as?: string;
    href: string;
    variant?: VariantTypes;
}

const Link: React.FC<LinkProps> = styled(Box)((props) => {
    const { color } = props;
    const currentColor = color || getColor(props);
    return css`
        color: ${currentColor};

        &:visited {
            color: ${getDimmerColor(currentColor)};
        }
    `;
});

Link.defaultProps = {
    as: 'a'
};

export default Link;
