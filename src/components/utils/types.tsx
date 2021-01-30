import {
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  FlexboxProps,
  GridProps,
  TypographyProps,
  BackgroundProps,
  PositionProps
} from 'styled-system';

export interface OutlinesProps {
  outline?: string;
  outlineColor?: string;
  outlineOffset?: number | string;
  outlineStyle?: string;
  outlineWidth?: number | string;
}

export type ButtonTypes = 'button' | 'submit' | 'reset';
export type InputTypes =
  | 'color'
  | 'date'
  | 'email'
  | 'file'
  | 'hidden'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text';
export type Sizes = 'sm' | 'md' | 'lg';
export type SizesAll = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface Palette {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  light: string;
  dark: string;
}

export interface Colors {
  white: string;
  red: string;
  pink: string;
  purple: string;
  indigo: string;
  blue: string;
  cyan: string;
  teal: string;
  green: string;
  lime: string;
  yellow: string;
  amber: string;
  orange: string;
  brown: string;
  black: string;
}

export interface Grays {
  gray03: string;
  gray05: string;
  gray10: string;
  gray20: string;
  gray30: string;
  gray40: string;
  gray50: string;
  gray60: string;
  gray70: string;
  gray80: string;
  gray90: string;
}

export type Variants = keyof Palette | keyof Colors | keyof Grays;

export interface WithDark {
  dark?: boolean;
}

export interface WithFrame {
  frame?: boolean;
}

export interface WithInline {
  inline?: boolean;
}

export interface WithInvert {
  invert?: boolean;
}

export interface WithSizes {
  size?: Sizes;
}

export interface WithSizesAll {
  size?: SizesAll;
}

export interface WithVariant {
  variant?: Variants;
}

// TODO: Complete event props
export interface EventProps {
  onClick?: (...args: any) => any;
  onChange?: (...args: any) => any;
  onSubmit?: (...args: any) => any;
  onFocus?: (...args: any) => any;
}

// TODO: Divide base props according to the needs of each component
export interface BaseProps
  extends EventProps,
    SpaceProps,
    LayoutProps,
    ColorProps,
    BorderProps,
    FlexboxProps,
    GridProps,
    TypographyProps,
    BackgroundProps,
    PositionProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  css?: any;
  cursor?: string;
  filter?: string;
  responsive?: any;
  textDecoration?: string;
  textTransform?:
    | 'capitalize'
    | 'full-size-kana'
    | 'full-width'
    | 'inherit'
    | 'initial'
    | 'lowercase'
    | 'none'
    | 'unset'
    | 'uppercase';
  theme?: any;
}
