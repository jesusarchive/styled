import styled, { css } from 'styled-components';
import Box from './Box';
import { getColor, getDimmerColor } from './utils/helpers';

type LinkProps = {
    as?: string;
    href: string;
    variant?: any;
};

const Link: React.FC<any> = styled(Box)(
    (
        props = {
            as: 'a'
        }
    ) => {
        const { color } = props;
        const currentColor = color || getColor(props);
        return css`
            color: ${currentColor};

            &:visited {
                color: ${getDimmerColor(currentColor)};
            }
        `;
    }
);

export default Link;
