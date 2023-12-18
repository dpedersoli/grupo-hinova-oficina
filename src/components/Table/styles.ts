import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.gray[200],
    borderRadius: 4,
    marginBottom: 8,
  },

  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 30,
    paddingRight: 7,
    paddingLeft: 10,
  },

  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: theme.colors.gray[100],
  },

  dropdownArrow: {
    width: 15,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    borderRadius: 99,
  },

  tableRowContainer: {
    paddingHorizontal: 10,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: theme.colors.gray[100],
  },

  image: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 5,
  },
});
