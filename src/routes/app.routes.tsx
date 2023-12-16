import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationProp } from "@react-navigation/native";
import { AutoWorkshops } from "../screens/AutoWorkshops";
import { Home } from "../screens/Home";
import { ReferAFriend } from "../screens/ReferAFriend";

type AppRoutes = {
  home: undefined;
  workshops: undefined; // { exerciseId: string }; -> determino que nessa rota vou receber um objeto com 'exerciseId' do tipo string
  refer: undefined;
};

export type AppNavigatorRoutesProps = NavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="workshops" component={AutoWorkshops} />

      <Screen name="refer" component={ReferAFriend} />
    </Navigator>
  );
}
