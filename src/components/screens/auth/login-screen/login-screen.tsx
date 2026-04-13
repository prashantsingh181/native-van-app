import { Input } from "@/components/ui/input";
import { useAuth } from "@/context";
import { useFormHandler } from "@/hooks/use-form-handler";
import { useStyles } from "@/hooks/use-styles";
import { colors } from "@/tokens/colors/semantics";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { generateLoginScreenStyles } from "./login-screen.styles";
import { LoginForm } from "./login-screen.types";

export const LoginScreen = () => {
  const { setUser } = useAuth();
  const styles = useStyles(generateLoginScreenStyles);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (formValues: LoginForm) => {
    setUser({
      name: formValues.name,
      email: formValues.email.trim(),
      password: "",
    });
    router.replace("/(tabs)/profile");
  };

  const validateLoginForm = (formValues: LoginForm) => {
    const errors: Partial<Record<keyof LoginForm, string>> = {};
    if (!formValues.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const { values, displayErrors, handleChange, handleBlur, handleSubmit } =
    useFormHandler<LoginForm>({
      initialValues: { name: "", email: "", password: "" },
      validate: validateLoginForm,
      onSubmit: handleLogin,
    });

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>Welcome back to Van Life</Text>

        {!!error && <Text style={styles.error}>{error}</Text>}

        <View style={styles.form}>
          <Input
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={colors.textMuted}
            autoCapitalize="none"
            keyboardType="default"
            value={values.name}
            onChangeText={(text) => {
              handleChange("name")(text);
              setError(null);
            }}
            onBlur={handleBlur("name")}
            error={displayErrors.name}
          />
          <Input
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={colors.textMuted}
            autoCapitalize="none"
            keyboardType="email-address"
            value={values.email}
            onChangeText={(text) => {
              handleChange("email")(text);
              setError(null);
            }}
            onBlur={handleBlur("email")}
            error={displayErrors.email}
          />
          <Input
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={colors.textMuted}
            secureTextEntry
            value={values.password}
            onChangeText={(text) => {
              handleChange("password")(text);
              setError(null);
            }}
            onBlur={handleBlur("password")}
            error={displayErrors.password}
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>

        <Pressable onPress={() => router.back()} style={styles.backLink}>
          <Text style={styles.backLinkText}>← Back</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
