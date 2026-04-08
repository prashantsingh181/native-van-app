import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateReviewStyles = (colors: Colors) =>
  StyleSheet.create({
    nameDateContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      marginVertical: 8,
    },
    author: {
      fontSize: 16,
      color: colors.textPrimary,
      fontWeight: "600",
    },
    date: {
      fontSize: 14,
      color: colors.textTertiary,
      fontWeight: "600",
    },
    body: {
      paddingBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: colors.borderRating,
      color: colors.textPrimary,
      fontWeight: "500",
    },
  });

export const generateReviewStarsStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    starIcon: {
      color: colors.bgRating,
    },
    starIconFilled: {
      color: colors.bgBrandEmphasis,
    },
  });
