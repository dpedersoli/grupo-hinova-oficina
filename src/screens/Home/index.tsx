import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";
import Logo from "../../assets/png/logo.png";
import { Button } from "../../components/Button";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoToWorkshops() {
    navigation.navigate("workshops");
  }

  function handleGoToReferAFriend() {
    navigation.navigate("refer");
  }

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        defaultSource={Logo}
        alt="Logotipo com ferramentas e com título de: Oficinas de Auto com slogan: Encontre a Sua, com uma engrenagem em volta"
        style={styles.logo}
      />
      <View style={styles.buttonsContainer}>
        <Button title="Buscar Oficinas" onPress={handleGoToWorkshops} />

        <Button title="Indique um Amigo" onPress={handleGoToReferAFriend} />
      </View>
    </View>
  );
}
