import { AuthGuard } from "@/components/layout/auth-guard";
import { useAuth } from "@/context";
import { colors } from "@/tokens/colors/semantics";
import { buttonStyles } from "@/tokens/shared/button";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileTab() {
  const { user, logout } = useAuth();
  return (
    <AuthGuard>
      <SafeAreaView style={styles.safe} edges={["top"]}>
        <View style={styles.container}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitials}>
              {user?.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </Text>
          </View>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.email}>{user?.email}</Text>
          <Pressable onPress={logout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </AuthGuard>
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
  logoutButtonText: {
    ...buttonStyles.base,
    ...buttonStyles.primary,
    ...buttonStyles.md,
    ...buttonStyles.textMd,
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
