import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateFooterStyles = (colors: Colors) =>
  StyleSheet.create({
    footerContainer: {
      padding: 16,
      backgroundColor: colors.bgDarkSecondary,
      alignItems: "center",
    },
    footerText: {
      color: colors.textMuted,
    },
  });
