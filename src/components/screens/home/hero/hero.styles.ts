import { Colors } from "@/tokens/colors/semantics";
import { buttonStyles } from "@/tokens/shared/button";
import { StyleSheet } from "react-native";

export const generateHeroStyles = (colors: Colors) =>
  StyleSheet.create({
    imageBackground: {
      paddingHorizontal: 20,
      paddingTop: 80,
      paddingBottom: 60,
      position: "relative",
    },
    overlay: {
      ...StyleSheet.absoluteFill,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    heading: {
      fontSize: 36,
      fontWeight: "800",
      lineHeight: 42,
      color: colors.textInverted,
      textAlign: "center",
    },
    content: {
      color: colors.textInverted,
      marginTop: 20,
      textAlign: "center",
    },
    button: {
      ...buttonStyles.base,
      ...buttonStyles.primary,
      ...buttonStyles.md,
      ...buttonStyles.textSm,
      fontWeight: "700",
      textAlign: "center",
    },
    link: {
      marginTop: 40,
    },
  });
