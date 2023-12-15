import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },

  input: {
    backgroundColor: theme.colors.black,
    height: 40,
    width: "90%",
    paddingHorizontal: 10,
    borderWidth: 0,
    fontSize: 14,
    color: theme.colors.gray[100],
    fontFamily: theme.fonts.body,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  invalid: {
    borderWidth: 1,
    borderColor: theme.colors.red,
  },

  containerFocused: {
    borderWidth: 1,
    borderColor: theme.colors.blue[100],
  },

  errorMessage: {
    fontSize: 12,
    color: theme.colors.red,
    textAlign: "center",
    marginHorizontal: 10,
    marginBottom: 2,
  },
});
