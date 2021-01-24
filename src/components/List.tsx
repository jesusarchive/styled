import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px } from './utils/helpers';

const styles = (props: any) => {
    const { as, bordered, inline, m, styleType } = props;
    const { borderColor, borderRadius } = getTheme(props, 'list');
    return css`
        ${bordered ? `border: 1px solid ${borderColor};` : ''};
        ${bordered ? `border-radius: ${px(borderRadius)};` : ''};
        display: flex;
        flex-direction: ${inline ? 'row' : 'column'};
        margin: ${isDefined(m) ? m : 0};
        ${as === 'ul' && styleType === 'none' ? 'padding: 0;' : ''};
        ${as === 'ul' ? `list-style-type: ${styleType};` : ''};
    `;
};

const stylesItem = (props: any) => {
    const { bordered, size } = props;
    const { padding } = getTheme(props, 'list');
    return css`
        padding: ${bordered ? px(padding[size]) : 0};
    `;
};

const stylesSibling = (props: any) => {
    const { bordered, size } = props;
    const { borderColor, padding } = getTheme(props, 'list');
    return css`
        border-top: ${bordered ? `1px solid ${borderColor}` : 'none'};
        margin-top: ${!bordered ? px(padding[size]) : 0};
    `;
};

type ListProps = {
    as?: 'ul' | 'ol';
    bordered?: boolean;
    inline?: boolean;
    reversed?: boolean;
    size?: any;
    start?: number;
    styleType?: ('disc' | 'circle' | 'square' | 'decimal' | 'lower-alpha' | 'none') | string;
    type?: '1' | 'a' | 'A' | 'i' | 'I';
};

const List: React.FC<any> = styled(Box)`
    ${styles};

    > li {
        ${stylesItem}

        + li {
            ${stylesSibling}
        }
    }
`;

List.defaultProps = {
    as: 'ul',
    bordered: false,
    inline: false,
    size: 'md',
    styleType: 'none',
    type: '1'
};

export default List;
