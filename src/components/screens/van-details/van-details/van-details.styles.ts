import { Colors } from "@/tokens/colors/semantics";
import { buttonStyles } from "@/tokens/shared/button";
import { headingStyles } from "@/tokens/shared/heading";
import { StyleSheet } from "react-native";

export const generateVanDetailsStyles = (colors: Colors) =>
  StyleSheet.create({
    image: {
      width: "100%",
      height: 325,
      resizeMode: "cover",
      borderRadius: 8,
      marginBottom: 30,
    },
    name: { marginVertical: 10, ...headingStyles.headingPrimary },
    price: { fontSize: 24, fontWeight: "700", color: colors.textPrimary },
    perDayLabel: {
      fontSize: 20,
      fontWeight: "500",
      color: colors.textSecondary,
    },
    description: {
      marginVertical: 10,
      fontWeight: "500",
      fontSize: 15,
      color: colors.textSecondary,
    },
    rentBtn: {
      ...buttonStyles.base,
      ...buttonStyles.md,
      ...buttonStyles.primary,
      ...buttonStyles.textMd,
      fontWeight: "700",
      textAlign: "center",
      marginTop: 10,
    },
  });
