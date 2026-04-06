import { Colors } from "@/tokens/colors/semantics";
import { StyleSheet } from "react-native";

export const TAB_BAR_HEIGHT = 64;
export const PILL_INSET_V = 5;
export const PILL_INSET_H = 4;
export const generateTabBarStyles = (colors: Colors) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: colors.bgDarkPrimary,
      paddingHorizontal: 12,
      paddingTop: 8,
    },
    container: {
      height: TAB_BAR_HEIGHT,
      flexDirection: "row",
      borderRadius: 18,
      backgroundColor: colors.bgDarkSecondary,
      overflow: "hidden",
    },
    pill: {
      position: "absolute",
      left: PILL_INSET_H,
      top: PILL_INSET_V,
      bottom: PILL_INSET_V,
      borderRadius: 14,
      backgroundColor: colors.bgBrandEmphasis,
    },
    tabItem: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 3,
      zIndex: 1,
    },
    label: {
      fontSize: 11,
      fontWeight: "600",
      letterSpacing: 0.3,
    },
  });
