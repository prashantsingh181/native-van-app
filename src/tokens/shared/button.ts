import { StyleSheet } from "react-native";
import { colors } from "../colors/semantics";

// Shared button style tokens consumed by button components across the project.
// Add new variants here and reference them in the component layer.

export const buttonStyles = StyleSheet.create({
  // --- base ---
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },

  // --- variants ---

  primary: {
    backgroundColor: colors.bgBrandEmphasis,
    color: colors.textInverted,
  },
  secondary: {
    backgroundColor: colors.bgDarkPrimary,
    color: colors.textInverted,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: colors.bgBrandEmphasis,
  },
  ghost: {
    backgroundColor: "transparent",
  },

  // --- sizes ---
  sm: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  md: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  lg: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
  },

  // --- text ---
  textBase: {
    fontWeight: "600",
    fontSize: 16,
  },
  textSm: {
    fontSize: 14,
  },
  textMd: {
    fontSize: 16,
  },
  textLg: {
    fontSize: 18,
  },

  // --- states ---
  disabled: {
    opacity: 0.4,
  },
  fullWidth: {
    width: "100%",
  },
});
