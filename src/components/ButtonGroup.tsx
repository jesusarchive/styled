import React from 'react';
import styled from 'styled-components';
import Box from './Box';

export const StyledButtonGroup = styled(Box)`
    display: inline-flex;

    > button {
        + button {
            margin-left: -1px;
        }

        &:first-child {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
        }

        &:last-child {
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
        }

        &:not(:first-child):not(:last-child) {
            border-radius: 0;
        }
    }
`;

type ButtonGroupProps = {
    size?: any;
    variant?: any;
};

const ButtonGroup: React.FC<any> = ({ children, size, variant, ...props }: any) => {
    const buttonProps = {
        size,
        variant
    };
    return (
        <StyledButtonGroup {...props}>
            {React.Children.map(children, (child) => React.cloneElement(child, { ...buttonProps }))}
        </StyledButtonGroup>
    );
};

export default ButtonGroup;
