import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export function Button({
  title,
  disabled = false,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={disabled ? [styles.button, styles.disabled] : styles.button}
      disabled={disabled}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.blue[100]} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
