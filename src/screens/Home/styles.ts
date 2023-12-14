import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: theme.colors.gray[400],
  },

  logo: {
    width: 350,
    height: 70,
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },

  button: {
    backgroundColor: theme.colors.blue[200],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
  },

  text: {
    color: theme.colors.gray[400],
    fontWeight: "bold",
  },
});
