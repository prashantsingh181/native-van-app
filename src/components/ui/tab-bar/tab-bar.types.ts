import { Ionicons } from "@expo/vector-icons";

export interface TabConfig {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
}
