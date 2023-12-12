import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AutoWorkshops } from "../screens/AutoWorkshops";
import { Home } from "../screens/Home";
import { ReferAFriend } from "../screens/ReferAFriend";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="auto_workshops" component={AutoWorkshops} />

      <Screen name="refer_a_friend" component={ReferAFriend} />
    </Navigator>
  );
}
