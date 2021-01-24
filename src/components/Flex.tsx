import styled from 'styled-components';
import Box from './Box';

type FlexProps = {
    as?: string;
};

const Flex: React.FC<any> = styled(Box)({
    display: 'flex'
});

Flex.defaultProps = {
    alignItems: 'center'
};

export default Flex;
