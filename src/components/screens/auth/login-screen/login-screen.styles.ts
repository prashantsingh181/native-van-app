import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateLoginScreenStyles = (colors: Colors) =>
  StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: colors.bgBrandSubtle,
    },
    container: {
      flex: 1,
      paddingHorizontal: 24,
      justifyContent: "center",
      gap: 8,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      color: colors.textPrimary,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 15,
      color: colors.textSecondary,
      marginBottom: 16,
    },
    error: {
      fontSize: 13,
      color: "red",
      marginBottom: 8,
    },
    form: {
      gap: 12,
    },
    input: {
      borderWidth: 1,
      borderColor: colors.textMuted,
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 12,
      fontSize: 15,
      color: colors.textPrimary,
    },
    button: {
      backgroundColor: colors.bgBrandEmphasis,
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 4,
    },
    buttonText: {
      color: colors.textInverted,
      fontWeight: "700",
      fontSize: 16,
    },
    backLink: {
      marginTop: 24,
      alignSelf: "flex-start",
    },
    backLinkText: {
      color: colors.textSecondary,
      fontSize: 14,
    },
  });
