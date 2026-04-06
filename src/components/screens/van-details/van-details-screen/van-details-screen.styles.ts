import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateVanDetailsScreenStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bgBrandSubtle,
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    backBtn: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      alignSelf: "flex-start",
    },
    backBtnText: {
      fontWeight: "500",
      textDecorationLine: "underline",
      color: colors.textSecondary,
      fontSize: 16,
    },
    backBtnIcon: {
      color: colors.textSecondary,
    },
    contentContainer: {
      marginTop: 30,
    },
  });
