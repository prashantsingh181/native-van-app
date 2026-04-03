import { Colors } from "@/tokens/colors/semantics";
import { buttonStyles } from "@/tokens/shared/button";
import { StyleSheet } from "react-native";

export const generateMissionStyles = (colors: Colors) =>
  StyleSheet.create({
    image: { width: "100%", height: 180 },
    missionContainer: {
      backgroundColor: colors.bgBrandSubtle,
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    missionTitle: {
      fontSize: 28,
      fontWeight: "700",
      color: colors.textPrimary,
    },
    missionText: {
      fontWeight: "500",
      color: colors.textPrimary,
      marginTop: 20,
    },
    tagLineContainer: {
      backgroundColor: colors.bgBrandBold,
      padding: 20,
      marginTop: 36,
      borderRadius: 5,
    },
    tagLineText: {
      color: colors.textPrimary,
      fontWeight: "700",
      fontSize: 22,
    },
    tagLineLink: {
      ...buttonStyles.base,
      ...buttonStyles.secondary,
      ...buttonStyles.md,
      ...buttonStyles.textSm,
      fontWeight: "700",
    },
    tagLineLinkContainer: {
      marginTop: 20,
      alignSelf: "flex-start",
    },
  });
