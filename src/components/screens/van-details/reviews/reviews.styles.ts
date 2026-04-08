import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateReviewsStyles = (colors: Colors) =>
  StyleSheet.create({
    container: { gap: 24 },
    heading: {
      color: colors.textPrimary,
      fontSize: 24,
      fontWeight: "700",
      marginTop: 30,
      marginBottom: 24,
    },
  });
