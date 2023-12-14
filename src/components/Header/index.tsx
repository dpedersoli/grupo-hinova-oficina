import { useNavigation } from "@react-navigation/native";
import { Car, CaretLeft } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.goBackArrow}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <CaretLeft size={25} color={theme.colors.blue[200]} weight="bold" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Car size={20} color={theme.colors.gray[100]} weight="bold" />
      </View>
    </View>
  );
}
