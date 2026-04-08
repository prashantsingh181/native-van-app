import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateRatingBreakdownStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      gap: 18,
    },
  });

export const generateRatingBarStyles = (colors: Colors) =>
  StyleSheet.create({
    ratingContainer: {
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
    },
    ratingLine: {
      flex: 1,
      position: "relative",
      backgroundColor: colors.bgRating,
      borderRadius: 3,
      overflow: "hidden",
      height: 6,
    },
    ratingCovered: {
      backgroundColor: colors.bgBrandEmphasis,
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
    },
    starLabel: {
      width: 50,
      color: colors.textSecondary,
      fontSize: 14,
    },
    percentage: {
      width: 60,
      color: colors.textSecondary,
      fontSize: 14,
    },
  });
