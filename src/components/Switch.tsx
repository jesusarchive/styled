/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';
import { getColor, getTheme, px } from './utils/helpers';

const styles = (props: any) => {
    const { size } = props;
    const sizes = getTheme(props, 'switchSizes');
    return css`
        cursor: pointer;
        height: ${px(sizes[size].height)};
        position: relative;
        user-select: none;
        vertical-align: middle;
        width: ${px(sizes[size].width)};
    `;
};

const stylesTrack = (props: any) => {
    const { size, status } = props;
    const sizes = getTheme(props, 'switchSizes');
    const color = getColor(props);
    return css`
        background-color: ${status ? color : '#ccc'};
        border-radius: ${px(sizes[size].borderRadius)};
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
    `;
};

const stylesButton = (props: any) => {
    const { size, status } = props;
    const sizes = getTheme(props, 'switchSizes');
    return css`
        background-color: #fff;
        border-radius: 50%;
        bottom: ${px(sizes[size].space)};
        left: ${status ? '50%' : px(sizes[size].space)};
        position: absolute;
        top: ${px(sizes[size].space)};
        transition: left 0.1s ease;
        width: ${px(sizes[size].height - sizes[size].space * 2)};
    `;
};

const StyledInput = styled.input`
    bottom: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
`;

const StyledTrack: React.FC<any> = styled.span`
    ${stylesTrack};
`;

const StyledButton: React.FC<any> = styled.span`
    ${stylesButton};
`;

export const StyledSwitch: React.FC<any> = styled(Box)`
    ${styles};
`;

interface ISwitchProps extends React.HTMLAttributes<Element> {
    name: string;
    onChange?: (...args: any[]) => any;
    size?: any;
    value?: boolean;
    variant?: any;
    rest?: any;
}

type SwitchState = {
    status?: any;
};

class Switch extends React.PureComponent<ISwitchProps, SwitchState> {
    constructor(props: any) {
        super(props);
        this.state = {
            status: props.value
        };
    }
    static defaultProps = {
        onChange: () => {},
        size: 'md',
        value: false,
        variant: 'primary'
    };
    componentDidUpdate(prevProps: any) {
        const { value } = this.props;
        if (prevProps.value !== value) {
            this.update(value);
        }
    }
    update = (value: any) => {
        this.setState({ status: value });
    };
    handleClick = () => {
        const { status } = this.state;
        const { onChange } = this.props as any;
        this.setState({
            status: !status
        });
        onChange(!status);
    };
    render() {
        const { name, ...rest } = this.props;
        const { status } = this.state;
        return (
            <StyledSwitch status={status} {...rest} onClick={this.handleClick}>
                <StyledInput type="hidden" name={name} value={status} />
                <StyledTrack status={status} {...rest} />
                <StyledButton status={status} {...rest} />
            </StyledSwitch>
        );
    }
}

export default Switch;
