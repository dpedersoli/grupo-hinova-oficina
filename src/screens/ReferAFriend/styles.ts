import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.gray[400],
  },

  formContainer: {
    marginTop: 20,
    width: "100%",
  },

  formContainerAlignment: {
    alignItems: "center",
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  smallInput: {
    width: "47%",
  },

  buttonContainer: {
    marginTop: 20,
  },
});
