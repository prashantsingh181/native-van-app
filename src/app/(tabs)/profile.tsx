import { colors } from "@/tokens/colors/semantics";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileTab() {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.avatarInitials}>JD</Text>
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john@vanlife.com</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bgWhite,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.bgBrandEmphasis,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  avatarInitials: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.textInverted,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  email: {
    fontSize: 14,
    color: colors.textMuted,
  },
});
