import { Colors, colors } from "@/tokens/colors/semantics";
import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useStyles = <T extends StyleSheet.NamedStyles<T>>(
  generatorFn: (colors: Colors) => T,
) => {
  return useMemo(() => generatorFn(colors), [generatorFn]);
};
