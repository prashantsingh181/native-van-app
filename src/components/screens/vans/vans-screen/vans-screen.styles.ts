import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateVansScreenStyles = (colors: Colors) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bgBrandSubtle },
  });
