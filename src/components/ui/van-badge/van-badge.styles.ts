import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateVanBadgeStyles = (colors: Colors) =>
  StyleSheet.create({
    typeBadge: {
      borderRadius: 5,
      paddingHorizontal: 12,
      paddingVertical: 8,
      alignSelf: "flex-start",
      fontWeight: "500",
      color: colors.textSecondary,
      fontSize: 14,
      backgroundColor: colors.bgBrandTint,
    },
    simpleTypeBadge: {
      backgroundColor: colors.bgBrandStrong,
      color: colors.textBadge,
    },
    luxuryTypeBadge: {
      backgroundColor: colors.bgDarkPrimary,
      color: colors.textBadge,
    },
    ruggedTypeBadge: {
      backgroundColor: colors.bgGreenBadge,
      color: colors.textBadge,
    },
  });
