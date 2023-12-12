import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function AutoWorkshops() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>AutoWorkshops</Text>
      <TouchableOpacity onPress={handleGoBack}>
        <Text style={styles.text}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}
