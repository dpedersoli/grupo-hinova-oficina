import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    gap: 2,
    borderBottomWidth: 1,
    borderColor: theme.colors.gray[200],
  },

  rowTitle: {
    fontWeight: "bold",
    color: theme.colors.gray[300],
    alignSelf: "flex-start",
  },

  rowInfo: {
    color: theme.colors.gray[300],
    width: "80%",
  },

  contact: {
    color: theme.colors.blue[400],
    textDecorationLine: "underline",
    textDecorationColor: theme.colors.blue[400],
  },
});
