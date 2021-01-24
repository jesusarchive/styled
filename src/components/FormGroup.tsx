import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import Flex from './Flex';
import { getTheme, isDefined, px } from './utils/helpers';

const styles = (props: any) => {
    const { bordered, mb, textAlign } = props;
    const { borderColor, borderRadius, marginBottom, padding } = getTheme(props, 'formGroup');
    return css`
        ${bordered ? `border: 1px solid ${borderColor};` : ''}
        ${bordered ? `border-radius: ${px(borderRadius)};` : ''}
    margin-bottom: ${px(isDefined(mb) ? mb : marginBottom)};
        ${bordered ? `padding: ${px(padding)};` : ''};
        text-align: ${textAlign || 'left'};
    `;
};
const margin = (props: any) => {
    const { inlineMargin } = getTheme(props, 'formGroup');
    return px(inlineMargin);
};
export const StyledFormGroup = styled(Box)`
    ${styles};

    ${({ inline }) => {
        if (inline) return '';
        return `
      label + label {
        margin-top: 6px;
       }
    `;
    }};

    ${Flex as any} {
        label,
        legend {
            margin-bottom: 0;
            margin-right: ${margin};
        }

        input {
            flex: 1;
            width: auto;
        }

        small {
            margin-left: ${margin};
            margin-top: 0;
        }
    }
`;
const helpBlock = (props: any) => {
    const { helpColor, helpMarginTop } = getTheme(props, 'formGroup');
    return css`
        color: ${helpColor};
        display: block;
        font-size: 85%;
        line-height: 1.3;
        margin-top: ${px(helpMarginTop)};
    `;
};
const HelpText = styled.small`
    ${helpBlock};
`;

type FormGroupProps = {
    bordered?: boolean;
    helpText?: string;
    inline?: boolean;
};

const FormGroup: React.FC<FormGroupProps> = (
    { children, helpText, inline, ...props }: any = {
        bordered: false,
        inline: false
    }
) => {
    const helpComponent = helpText && <HelpText>{helpText}</HelpText>;
    let content = (
        <React.Fragment>
            {children}
            {helpComponent}
        </React.Fragment>
    );
    if (inline) {
        content = <Flex alignItems="center">{content}</Flex>;
    }
    return (
        <StyledFormGroup inline={inline} {...props}>
            {content}
        </StyledFormGroup>
    );
};

export default FormGroup;
