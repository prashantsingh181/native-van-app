import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateFilterStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 30,
      marginTop: 20,
      alignItems: "center",
    },
    filterContainer: {
      flex: 1,
      flexDirection: "row",
      gap: 20,
    },
    filter: {
      borderRadius: 5,
      paddingHorizontal: 12,
      paddingVertical: 8,
      alignSelf: "flex-start",
      fontWeight: "500",
      color: colors.textSecondary,
      fontSize: 14,
      backgroundColor: colors.bgBrandTint,
    },
    activeSimpleFilter: {
      backgroundColor: colors.bgBrandDark,
      color: colors.textBadge,
    },
    activeRuggedFilter: {
      color: colors.textBadge,
      backgroundColor: colors.bgGreenBadge,
    },
    activeLuxuryFilter: {
      color: colors.textBadge,
      backgroundColor: colors.bgDarkPrimary,
    },
    clearFilter: {
      color: colors.textSecondary,
      textDecorationLine: "underline",
      fontWeight: "500",
    },
  });
