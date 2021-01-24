/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import Box from './Box';
import { BaseProps } from './utils/system';

interface FlexProps extends BaseProps {
    children?: React.ReactNode;
    as?: string;
}

const Flex: React.FC<FlexProps> = styled(Box)({
    display: 'flex'
});

Flex.defaultProps = {
    alignItems: 'center' as any
};

export default Flex;
