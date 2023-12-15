import { useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = TextInputProps & {
  errorMessage?: string | null;
  customStyle?: any;
};

export function Input({ errorMessage = null, customStyle, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const isInvalid = errorMessage;

  return (
    <View style={{ ...styles.container, ...customStyle }}>
      <TextInput
        style={
          isInvalid
            ? [styles.input, styles.invalid]
            : [styles.input, isFocused && styles.containerFocused]
        }
        placeholderTextColor={theme.colors.gray[200]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />

      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
}
