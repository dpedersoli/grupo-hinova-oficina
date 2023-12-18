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
  isLoading?: boolean;
  customStyle?: any;
}

export function Button({
  title,
  isLoading = false,
  customStyle,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ ...styles.button, ...customStyle }}
      disabled={isLoading}
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
