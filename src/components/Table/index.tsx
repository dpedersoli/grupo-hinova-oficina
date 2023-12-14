import { CaretCircleDown, CaretCircleUp } from "phosphor-react-native";
import { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { theme } from "../../global/styles/theme";
import { Workshops } from "../../interfaces/workshop.interface";
import { TableRow } from "../TableRow";
import { styles } from "./styles";

interface TableProps extends TouchableOpacityProps {
  workshop: Workshops;
}

export function Table({ workshop, ...rest }: TableProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        {...rest}
        onPress={handleDropdown}
        style={styles.containerRow}
        activeOpacity={0.7}
      >
        <Text style={styles.title}>{workshop.Nome}</Text>

        <View style={styles.dropdownArrow}>
          {isOpen ? (
            <CaretCircleUp
              size={20}
              color={theme.colors.blue[200]}
              weight="fill"
            />
          ) : (
            <CaretCircleDown
              size={20}
              color={theme.colors.blue[200]}
              weight="fill"
            />
          )}
        </View>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.tableRowContainer}>
          <Image
            style={styles.image}
            source={{ uri: `data:image;base64,${workshop.Foto}` }}
          />

          <TableRow
            variant="simple"
            label="Serviço"
            content={workshop.DescricaoCurta}
          />
          <TableRow
            variant="simple"
            label="Endereço"
            content={workshop.Endereco}
          />
          {workshop.AvaliacaoUsuario > 0 && (
            <TableRow
              variant="rate"
              label="Avaliação"
              rate={workshop.AvaliacaoUsuario}
            />
          )}
          {workshop.Email && (
            <TableRow variant="email" label="Email" content={workshop.Email} />
          )}
          {workshop.Telefone1 && (
            <TableRow
              variant="phone"
              label="Telefone"
              content={workshop.Telefone1}
            />
          )}
          {workshop.Telefone2 && (
            <TableRow
              variant="phone"
              label="Telefone"
              content={workshop.Telefone2}
            />
          )}
        </View>
      )}
    </View>
  );
}
