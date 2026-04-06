import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateFilterStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 30,
      marginTop: 15,
      alignItems: "center",
    },
    filterContainer: {
      flex: 1,
      flexDirection: "row",
      gap: 20,
    },
    clearFilter: {
      color: colors.textSecondary,
      textDecorationLine: "underline",
      fontWeight: "500",
    },
  });
