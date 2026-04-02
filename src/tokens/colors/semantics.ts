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
  textMuted: primitives.gray70,
  textInverted: primitives.white,

  bgDarkPrimary: primitives.gray10,
  bgDarkSecondary: primitives.gray40,
};

export type Colors = typeof colors;
