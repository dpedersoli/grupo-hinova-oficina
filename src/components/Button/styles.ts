import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.blue[200],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
  },

  disabled: {
    backgroundColor: theme.colors.opaque,
  },

  text: {
    color: theme.colors.gray[400],
    fontWeight: "bold",
  },
});
