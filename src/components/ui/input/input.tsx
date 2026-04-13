import { useStyles } from "@/hooks/use-styles";
import { colors } from "@/tokens/colors/semantics";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { generateInputStyles } from "./input.styles";
import { InputProps } from "./input.types";

export const Input = ({ error, ...props }: Readonly<InputProps>) => {
  const styles = useStyles(generateInputStyles);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          error && styles.inputError,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={colors.textMuted}
        {...props}
      />
      {!!error && <Text style={{ color: colors.textError }}>{error}</Text>}
    </View>
  );
};
