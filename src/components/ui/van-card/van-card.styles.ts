import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const generateVanCardStyles = (colors: Colors) =>
  StyleSheet.create({
    card: {
      flex: 1,
    },
    image: { width: "100%", resizeMode: "cover", height: 180, borderRadius: 5 },
    info: {
      flexDirection: "row",
      marginTop: 10,
      gap: 4,
    },
    name: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.textPrimary,
    },
    price: { fontSize: 18, fontWeight: "600", color: colors.textPrimary },
    perDayLabel: {
      fontSize: 12,
      color: colors.textPrimary,
      alignSelf: "flex-end",
    },
  });
