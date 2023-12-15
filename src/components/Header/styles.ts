import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    backgroundColor: theme.colors.gray[300],
    paddingTop: 50,
    paddingBottom: 20,
  },

  goBackArrow: {
    position: "absolute",
    left: 10,
    top: 50,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    color: theme.colors.gray[100],
  },

  logo: {
    width: 50,
    height: 50,
  },
});
