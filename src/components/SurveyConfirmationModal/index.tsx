import { Check, X } from "phosphor-react-native";
import { Modal, ModalProps, ScrollView, Text, View } from "react-native";
import { Button } from "../Button";
import { styles } from "./styles";

export interface StatusModalProps extends ModalProps {
  onClose: () => void;
  isSuccess: boolean;
  failedText?: string;
}

export function StatusModal({
  onClose,
  isSuccess,
  failedText,
  ...otherProps
}: StatusModalProps) {
  return (
    <Modal {...otherProps} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View
          style={
            isSuccess
              ? styles.subContainer
              : [styles.subContainer, styles.failedSubContainer]
          }
        >
          <View
            style={
              isSuccess
                ? styles.modalHeaderContainer
                : [styles.modalHeaderContainer, styles.failedHeader]
            }
          />

          <ScrollView>
            <View style={styles.bodyContainer}>
              {isSuccess ? (
                <Check size={50} style={styles.icon} weight="bold" />
              ) : (
                <X size={50} style={styles.icon} weight="bold" />
              )}

              <Text style={styles.title}>
                {isSuccess ? "Sucesso!" : "Erro!"}
              </Text>
              <Text style={styles.text}>
                {isSuccess ? "Indicação enviada com sucesso" : failedText}
              </Text>

              {!isSuccess && (
                <Button
                  title="Fechar"
                  onPress={onClose}
                  customStyle={styles.failedButton}
                />
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
