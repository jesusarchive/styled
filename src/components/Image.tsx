import styled, { css } from 'styled-components';
import Box from './Box';

type ImageProps = {
    alt: string;
    as?: string;
    src: string;
};

const Image: React.FC<any> = styled(Box)(
    (
        props = {
            as: 'img'
        }
    ) => {
        const { maxWidth } = props;
        return css`
            max-width: ${maxWidth || '100%'};
        `;
    }
);

export default Image;
