import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { theme } from "../../global/styles/theme";
import { Workshops } from "../../interfaces/workshop.interface";
import { api } from "../../services/api";
import { styles } from "./styles";

export function AutoWorkshops() {
  const CODIGO_ASSOCIACAO = 601;
  const [workshops, setWorkshops] = useState<Workshops[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleGoToReferAFriend() {
    navigation.navigate("refer");
  }

  async function fetchWorkshops() {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/api/oficina?codigoAssociacao=${CODIGO_ASSOCIACAO}&cpfAssociado=`
      );

      setWorkshops(response.data.ListaOficinas);
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível carregar as oficinas. Tente novamente mais tarde"
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchWorkshops();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Oficinas" />
      <View style={styles.subContainer}>
        <View style={styles.workhopsList}>
          {isLoading ? (
            <ActivityIndicator color={theme.colors.blue[100]} />
          ) : (
            <FlatList
              data={workshops}
              renderItem={({ item }) => <Table workshop={item} />}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <Text style={styles.text}>
                  No momento, não existem oficinas disponíveis.
                </Text>
              )}
            />
          )}
        </View>
        <Button title="Indique um Amigo" onPress={handleGoToReferAFriend} />
      </View>
    </View>
  );
}
