/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import darken from 'polished/lib/color/darken';
import desaturate from 'polished/lib/color/desaturate';
import lighten from 'polished/lib/color/lighten';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import {
  AlignContentProps,
  AlignItemsProps,
  AlignSelfProps,
  BackgroundImageProps,
  BorderRadiusProps,
  BordersProps,
  BottomProps,
  ColorProps,
  compose,
  DisplayProps,
  FlexBasisProps,
  FlexDirectionProps,
  FlexProps,
  FlexWrapProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  HeightProps,
  JustifyContentProps,
  LeftProps,
  LineHeightProps,
  MaxHeightProps,
  MaxWidthProps,
  MinHeightProps,
  MinWidthProps,
  OrderProps,
  PositionProps,
  RightProps,
  SpaceProps,
  style,
  TextAlignProps,
  TopProps,
  WidthProps,
  ZIndexProps
} from 'styled-system';

import { getColor, getTheme, getYiq, isDefined, px } from './helpers';
import { placeholder } from './mixins';
import { colors as colorsTheme, palette } from './theme';

export const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
  transformValue: px
});

export const outlines = compose(
  style({
    prop: 'outline',
    key: 'outlines'
  }),
  style({
    prop: 'outlineColor',
    key: 'outlines'
  }),
  style({
    prop: 'outlineOffset',
    key: 'outlines'
  }),
  style({
    prop: 'outlineStyle',
    key: 'outlines'
  }),
  style({
    prop: 'outlineWidth',
    key: 'outlines'
  })
);

export interface OutlinesProps {
  outline?: string;
  outlineColor?: string;
  outlineOffset?: number | string;
  outlineStyle?: string;
  outlineWidth?: number | string;
}

export const inputTextTypes = ['date', 'email', 'file', 'number', 'password', 'search', 'tel', 'text'];

export const sizesTypes = ['sm', 'md', 'lg'];
export const sizesAllTypes = ['xs', 'sm', 'md', 'lg', 'xl'];
export const variantTypes = [...Object.keys(palette), ...Object.keys(colorsTheme)];

export type SizesTypes = typeof sizesTypes[number];
export type SizesAllTypes = typeof sizesAllTypes[number];
export type VariantTypes = typeof variantTypes[number];
export interface BaseProps {
  alignContent?: AlignContentProps;
  alignItems?: AlignItemsProps | string;
  alignSelf?: AlignSelfProps;
  backgroundImage?: BackgroundImageProps;
  borders?: BordersProps;
  borderRadius?: BorderRadiusProps;
  bottom?: BottomProps;
  color?: ColorProps;
  display?: DisplayProps;
  flex?: FlexProps;
  flexBasis?: FlexBasisProps;
  flexDirection?: FlexDirectionProps;
  flexWrap?: FlexWrapProps;
  fontFamily?: FontFamilyProps;
  fontSize?: FontSizeProps;
  fontStyle?: FontStyleProps;
  fontWeight?: FontWeightProps;
  height?: HeightProps;
  justifyContent?: JustifyContentProps;
  left?: LeftProps;
  lineHeight?: LineHeightProps;
  maxHeight?: MaxHeightProps;
  maxWidth?: MaxWidthProps;
  minHeight?: MinHeightProps;
  minWidth?: MinWidthProps;
  order?: OrderProps;
  position?: PositionProps;
  right?: RightProps;
  space?: SpaceProps;
  textAlign?: TextAlignProps;
  textTransform?: string;
  top?: TopProps;
  width?: WidthProps;
  zIndex?: ZIndexProps;
}

export const baseStyles = {
  color: (props: any): FlattenSimpleInterpolation => {
    const { dark, outline } = props;
    const colors = getTheme(props, 'colors');
    const currentColor = getColor(props);

    let baseColor = getYiq(currentColor) > 180 ? colors.black : colors.white;
    baseColor = outline || dark ? currentColor : baseColor;

    return css`
      color: ${baseColor};
    `;
  },
  variant: (props: any): FlattenSimpleInterpolation => {
    const { dark, bordered } = props;
    const { colors, darkColor } = getTheme(props);
    const themeColor = getColor(props);

    const backgroundColor = bordered ? colors.white : themeColor;
    const baseColor = getYiq(themeColor) > 180 ? colors.black : colors.white;
    let currentColor = bordered ? themeColor : baseColor;

    if (dark) {
      const colorDiff = Math.abs(getYiq(darkColor) - getYiq(themeColor));
      currentColor = colorDiff > 40 ? themeColor : lighten(0.3, themeColor);
    } else if (bordered) {
      const colorDiff = Math.abs(getYiq(backgroundColor) - getYiq(themeColor));
      currentColor = colorDiff > 50 ? themeColor : darken(0.2, themeColor);
    }

    return css`
      background-color: ${dark ? darkColor : backgroundColor};
      border: 1px solid ${dark && !bordered ? darkColor : themeColor};
      color: ${currentColor};
    `;
  },
  fontSize: (props: any): string => {
    const { fontSize, size } = props;
    const sizes = getTheme(props, 'componentSizes');

    return fontSize || px(sizes[size]);
  },
  lineHeight: (props: any) => getTheme(props, 'lineHeight')
};

export const formPseudo = (props: any): any => {
  const {
    bg,
    borderColor: bc,
    bordered,
    color: cl,
    outline,
    outlineColor,
    outlineOffset = 1,
    outlineStyle,
    outlineWidth,
    multiple,
    valid
  } = props;
  const { backgroundColor, borderColor, color, requiredColor, validation } = getTheme(props, 'input');

  const currentBgColor = bg || backgroundColor;
  const currentColor = cl || color;
  let currentBorderColor = bc || borderColor;

  if (valid) {
    currentBorderColor = validation.valid;
  } else if (valid === false) {
    currentBorderColor = validation.invalid;
  }

  const inputOnly = (): any => {
    let body;

    if (!isDefined(multiple)) {
      try {
        body = css`
          ${placeholder(`color: ${lighten(0.5, currentColor)};`)};

          &:read-only {
            background-color: ${darken(0.02, currentBgColor)};
            color: ${lighten(0.3, currentColor)};
          }
        `;
      } catch (error) {
        // what to do?
      }
    }

    return body;
  };
  const disabled = (): any => {
    let body;

    if (!isDefined(multiple)) {
      try {
        body = css`
          &:disabled {
            background-color: ${darken(0.05, currentBgColor)};
            color: ${lighten(0.2, currentColor)};
          }
        `;
      } catch (error) {
        // what to do?
      }
    }

    return body;
  };

  return css`
    ${inputOnly};
    ${disabled};

    &:focus {
      outline-color: ${outlineColor || (bordered ? currentBorderColor : currentBgColor)};
      ${outline ? `outline: ${outline}` : null};
      ${outlineOffset ? `outline-offset: ${px(outlineOffset)}` : null};
      ${outlineStyle ? `outline-style: ${outlineStyle}` : null};
      ${outlineWidth ? `outline-width: ${px(outlineWidth)}` : null};
    }

    &:required:not(:valid) {
      border-color: ${requiredColor};
      ${placeholder(`color: ${lighten(0.1, desaturate(0.2, requiredColor))};`)};
    }
  `;
};
