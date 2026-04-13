import { primitives } from "./primitives";

export const colors = {
  bgWhite: primitives.white,

  bgBrandSubtle: primitives.orange50,
  bgBrandMuted: primitives.orange100,
  bgBrandTint: primitives.orange200,
  bgBrandModerate: primitives.orange300,
  bgBrandBold: primitives.orange400,
  bgBrandEmphasis: primitives.orange500,
  bgBrandStrong: primitives.orange600,
  bgBrandDark: primitives.orange800,
  bgBrandDeep: primitives.orange900,

  textPrimary: primitives.gray10,
  textSecondary: primitives.gray50,
  textTertiary: primitives.gray60,
  textMuted: primitives.gray70,
  textInverted: primitives.white,
  textBadge: primitives.orange200,

  bgDarkPrimary: primitives.gray10,
  bgDarkSecondary: primitives.gray40,
  bgGreenBadge: primitives.green700,
  bgRating: primitives.gray80,

  borderRating: primitives.gray90,
  borderInput: primitives.gray70,

  bgError: primitives.red50,
  bgErrorEmphasis: primitives.red500,
  textError: primitives.red600,
  textErrorSubtle: primitives.red300,
  borderError: primitives.red500,
};

export type Colors = typeof colors;
