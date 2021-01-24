import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { spacer } from './utils/helpers';
import { BaseProps } from './utils/system';

interface GroupProps extends BaseProps {
    children: React.ReactNode;
}

const Group: React.FC<GroupProps> = styled(Box)`
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    > *:not(:first-child) {
        margin-left: ${spacer(2)};
    }
`;

export default Group;
