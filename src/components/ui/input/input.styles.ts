import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateInputStyles = (colors: Colors) =>
  StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: colors.borderInput,
      borderRadius: 5,
      padding: 8,
      width: "100%",
      color: colors.textPrimary,
      fontSize: 16,
    },
    inputError: {
      borderColor: colors.borderError,
    },
    inputFocused: {
      borderColor: colors.bgBrandEmphasis,
    },
  });
