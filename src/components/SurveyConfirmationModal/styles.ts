import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  subContainer: {
    width: 300,
    height: 160,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.small,
  },

  failedSubContainer: {
    height: 195,
  },

  modalHeaderContainer: {
    height: 20,
    alignItems: "flex-end",
    justifyContent: "center",
    borderTopLeftRadius: theme.borderRadius.small,
    borderTopRightRadius: theme.borderRadius.small,
    backgroundColor: theme.colors.blue[100],
    paddingRight: 3,
  },

  failedHeader: {
    backgroundColor: theme.colors.red,
  },

  bodyContainer: {
    backgroundColor: theme.colors.white,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  icon: {
    marginTop: 5,
  },

  title: {
    color: theme.colors.black,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
    textTransform: "uppercase",
  },

  text: {
    textAlign: "center",
    fontSize: 12,
  },

  failedButton: {
    backgroundColor: theme.colors.red,
    width: 60,
    height: 25,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginTop: 10,
  },
});
