import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();

  function oficina() {
    navigation.navigate("auto_workshops");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <TouchableOpacity onPress={oficina}>
        <Text style={styles.text}>Oficinas</Text>
      </TouchableOpacity>
    </View>
  );
}
