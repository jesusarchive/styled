import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, px } from './utils/helpers';

const styles = (props: any) => {
    const { bordered, textAlign } = props;
    const { borderColor, borderRadius, padding } = getTheme(props, 'form');
    return css`
        ${bordered ? `border: 1px solid ${borderColor};` : ''}
        ${bordered ? `border-radius: ${px(borderRadius)};` : ''}
    ${bordered ? `padding: ${px(padding)};` : ''}
    text-align: ${textAlign || 'left'};
    `;
};

type FormProps = {
    action?: string;
    as?: string;
    bordered?: boolean;
    enctype?: string;
    method?: 'get' | 'post';
    target?: string;
};

const Form: React.FC<any> = styled(Box)`
    ${styles};
`;

Form.defaultProps = {
    as: 'form',
    bordered: false
};

export default Form;