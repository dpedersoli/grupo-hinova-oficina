import { Star } from "phosphor-react-native";
import { Linking, Text, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface TableRowProps {
  rate?: number;
  label?: string;
  content?: string;
  variant: "simple" | "rate" | "email" | "phone";
}

export function TableRow({ rate, label, content, variant }: TableRowProps) {
  function handleWorkshopsRate() {
    const rateScore = rate;

    const workshopRate: number[] = Array.from(
      { length: rateScore },
      (_, index) => index
    );

    const renderRate = workshopRate.map(() => {
      return <Star size={18} color={theme.colors.yellow} weight="fill" />;
    });

    return renderRate;
  }

  switch (variant) {
    case "simple":
      return (
        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>{label}: </Text>
          <Text style={styles.rowInfo}>{content}</Text>
        </View>
      );

    case "rate":
      return (
        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>{label}: </Text>
          <Text style={styles.rowInfo}>{handleWorkshopsRate()}</Text>
        </View>
      );

    case "email":
      return (
        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>{label}: </Text>
          <Text
            style={styles.contact}
            onPress={() => Linking.openURL(`mailto:${content}`)}
          >
            {content}
          </Text>
        </View>
      );

    case "phone":
      return (
        <View style={styles.rowContainer}>
          <Text style={styles.rowTitle}>{label}: </Text>
          <Text
            style={styles.contact}
            onPress={() => {
              Linking.openURL(`tel:${content}`);
            }}
          >
            {content}
          </Text>
        </View>
      );

    default:
      break;
  }
}
