import styled from 'styled-components';
import Box from './Box';
import { spacer } from './utils/helpers';

const Group: React.FC<any> = styled(Box)`
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    > *:not(:first-child) {
        margin-left: ${spacer(2)};
    }
`;

export default Group;
