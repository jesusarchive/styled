import styled from 'styled-components';
import Box from './Box';

type TextProps = {
    as?: string;
};

const Text: React.FC<any> = styled(Box)({});

Text.defaultProps = {
    as: 'span'
};
export default Text;
