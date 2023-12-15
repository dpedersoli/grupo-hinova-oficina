import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.gray[400],
  },

  subContainer: {
    height: "80%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  workhopsList: {
    width: "95%",
    height: "88%",
    marginTop: 20,
  },

  text: {
    color: theme.colors.red,
    alignSelf: "center",
  },
});
