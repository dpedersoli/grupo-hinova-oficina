import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { theme } from "../global/styles/theme";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const appTheme = DefaultTheme;
  appTheme.colors.background = theme.colors.gray[300];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.gray[300],
      }}
    >
      <NavigationContainer theme={appTheme}>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
