import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateRatingsStyles = (colors: Colors) =>
  StyleSheet.create({
    heading: {
      color: colors.textPrimary,
      fontSize: 24,
      fontWeight: "700",
      marginTop: 30,
    },
    ratingContainer: {
      marginVertical: 14,
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    rating: { color: colors.textPrimary, fontSize: 20, fontWeight: "700" },
    totalReviews: { color: colors.textSecondary, fontSize: 16 },
    starIcon: {
      color: colors.bgBrandEmphasis,
    },
  });
