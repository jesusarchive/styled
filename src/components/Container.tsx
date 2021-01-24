import styled, { css } from 'styled-components';
import Box from './Box';
import { getTheme, isDefined, px, responsive, spacer } from './utils/helpers';

const styles = (props: any) => {
    const { ml, mr, pb, pl, pr, pt } = props;
    const container = getTheme(props, 'container');
    const vertical = ({ verticalPadding }: any) => {
        /* istanbul ignore else */
        if (!verticalPadding) return '';
        const grid = responsive({
            md: `
          padding-bottom: ${isDefined(pb) ? px(pb) : spacer(4)(props)};
          padding-top: ${isDefined(pt) ? px(pt) : spacer(4)(props)};
        `,
            lg: `
          padding-bottom: ${isDefined(pb) ? px(pb) : spacer(5)(props)};
          padding-top: ${isDefined(pt) ? px(pt) : spacer(5)(props)};
        `
        });
        return css`
            padding-bottom: ${isDefined(pb) ? px(pb) : spacer(3)};
            padding-top: ${isDefined(pt) ? px(pt) : spacer(3)};

            ${grid};
        `;
    };
    const grid = responsive({
        md: `
        padding-left: ${isDefined(pl) ? px(pl) : spacer(4)(props)};
        padding-right: ${isDefined(pr) ? px(pr) : spacer(4)(props)};
      `
    });
    return css`
        margin-left: ${isDefined(ml) ? px(ml) : 'auto'};
        margin-right: ${isDefined(mr) ? px(mr) : 'auto'};
        padding-left: ${isDefined(pl) ? px(pl) : spacer(3)};
        padding-right: ${isDefined(pr) ? px(pr) : spacer(3)};
        max-width: ${container.maxWidth ? px(container.maxWidth) : 'none'};
        position: relative;
        width: 100%;
        ${container.layout[props.layout] || ''}
        ${vertical};

        ${grid};
    `;
};
type ContainerProps = {
    layout?: 'flex' | 'fullScreen';
    verticalPadding?: boolean;
};
const Container: React.FC<any> = styled(Box)`
    ${styles};
`;

Container.defaultProps = {
    verticalPadding: false
};
export default Container;