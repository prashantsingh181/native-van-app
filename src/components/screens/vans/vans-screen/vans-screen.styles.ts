import { Colors } from "@/tokens/colors/semantics";
import { headingStyles } from "@/tokens/shared/heading";
import { StyleSheet } from "react-native";

export const generateVansScreenStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bgBrandSubtle,
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    heading: {
      ...headingStyles.headingPrimary,
    },
  });
