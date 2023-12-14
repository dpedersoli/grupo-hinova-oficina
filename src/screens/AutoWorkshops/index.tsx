import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { theme } from "../../global/styles/theme";
import { Workshops } from "../../interfaces/workshop.interface";
import { api } from "../../services/api";
import { AppError } from "../../utils/AppError";
import { styles } from "./styles";

export function AutoWorkshops() {
  const CODIGO_ASSOCIACAO = 601;
  const [workshops, setWorkshops] = useState<Workshops[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const navigation = useNavigation();

  function handleGoToReferAFriend() {
    navigation.navigate("refer");
  }

  async function fetchWorkshops() {
    try {
      setIsLoading(true);

      const response = await api.get(`/api/oficina`);
      //?codigoAssociacao=${CODIGO_ASSOCIACAO}&cpfAssociado=

      setWorkshops(response.data.ListaOficinas);
    } catch (error) {
      const isAppError = error instanceof AppError;

      console.log("isAppError:", isAppError);

      const title =
        isAppError &&
        "Não foi possível criar a conta. Tente novamente mais tarde";

      setError(title);

      // toast.show({
      //   title,
      //   placement: "top",
      //   bgColor: "red.500",
      // });
    } finally {
      setIsLoading(false);
    }
  }

  // {
  //   error && Alert.alert("titulo", "error");
  // }

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
