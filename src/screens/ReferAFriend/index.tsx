import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { StatusModal } from "../../components/SurveyConfirmationModal";
import { ReferralFormDataProps } from "../../interfaces/referral.interface";
import { api } from "../../services/api";
import { styles } from "./styles";

const referAFriendSchema = yup.object({
  NomeAssociado: yup.string().trim().required("Informe o nome do associado."),
  CodigoAssociacao: yup
    .string()
    .trim()
    .required("Informe o código da associação. Apenas números."),
  CpfAssociado: yup
    .string()
    .trim()
    .required("Informe o CPF.")
    .min(11, "O CPF deve ter pelo menos 10 números. Apenas números."),
  EmailAssociado: yup
    .string()
    .trim()
    .required("Informe o e-mail do associado")
    .email("E-mail inválido."),
  TelefoneAssociado: yup
    .string()
    .trim()
    .required("Informe o telefone do associado")
    .min(10, "O telefone deve ter pelo menos 10 números. Apenas números."),
  PlacaVeiculoAssociado: yup
    .string()
    .trim()
    .required("Informe a placa do veículo do associado"),
  NomeAmigo: yup.string().required("Informe o nome do amigo indicado."),
  TelefoneAmigo: yup
    .string()
    .trim()
    .required("Informe o telefone do amigo indicado.")
    .min(10, "O telefone deve ter pelo menos 10 números. Apenas números."),
  EmailAmigo: yup
    .string()
    .trim()
    .required("Informe o e-mail do amigo indicado")
    .email("E-mail inválido."),
});

export function ReferAFriend() {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [failedText, setFailedText] = useState<string>();

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ReferralFormDataProps>({
    resolver: yupResolver(referAFriendSchema),
  });

  function handleCloseModal() {
    setShowModal(false);
  }

  async function handleFriendReferral({
    NomeAssociado,
    CodigoAssociacao,
    CpfAssociado,
    EmailAssociado,
    TelefoneAssociado,
    PlacaVeiculoAssociado,
    DataCriacao,
    NomeAmigo,
    TelefoneAmigo,
    EmailAmigo,
  }: ReferralFormDataProps) {
    try {
      setIsLoading(true);

      const response = await api.post(`/Api/Indicacao`, {
        Indicacao: {
          NomeAssociado,
          CodigoAssociacao,
          CpfAssociado,
          EmailAssociado,
          TelefoneAssociado,
          PlacaVeiculoAssociado,
          DataCriacao,
          NomeAmigo,
          TelefoneAmigo,
          EmailAmigo,
        },
        Remetente: EmailAssociado,
      });

      if (response.data.Sucesso !== null) {
        setIsSuccess(true);
        setShowModal(true);

        setTimeout(() => {
          setShowModal(false);

          navigation.navigate("home");
        }, 3000);
      } else if (response.data.RetornoErro.retornoErro !== null) {
        setFailedText(response.data.RetornoErro.retornoErro);
        setIsSuccess(false);
        setShowModal(true);
      }
    } catch (error) {
      setIsSuccess(false);
      setShowModal(true);

      setFailedText(
        "Erro interno. Se o problema persistir, contate a sua Associação!"
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Header title="Indique um Amigo" />
        <ScrollView
          style={styles.formContainer}
          contentContainerStyle={styles.formContainerAlignment}
        >
          <Controller
            control={control}
            name="NomeAssociado"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome do Associado"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.NomeAssociado?.message}
              />
            )}
          />
          <View style={styles.rowContainer}>
            <Controller
              control={control}
              name="CodigoAssociacao"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Codigo da Associação"
                  onChangeText={onChange}
                  value={value}
                  customStyle={styles.smallInput}
                  errorMessage={errors.CodigoAssociacao?.message}
                  keyboardType="numeric"
                />
              )}
            />
            <Controller
              control={control}
              name="CpfAssociado"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="CPF do Associado"
                  onChangeText={onChange}
                  value={value}
                  customStyle={styles.smallInput}
                  keyboardType="numeric"
                  errorMessage={errors.CpfAssociado?.message}
                />
              )}
            />
          </View>

          <Controller
            control={control}
            name="EmailAssociado"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Email do Associado"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.EmailAssociado?.message}
              />
            )}
          />
          <View style={styles.rowContainer}>
            <Controller
              control={control}
              name="TelefoneAssociado"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Telefone do Associado"
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                  customStyle={styles.smallInput}
                  errorMessage={errors.TelefoneAssociado?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="PlacaVeiculoAssociado"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Placa do Associado"
                  onChangeText={onChange}
                  value={value}
                  customStyle={styles.smallInput}
                  errorMessage={errors.PlacaVeiculoAssociado?.message}
                />
              )}
            />
          </View>
          <Controller
            control={control}
            name="NomeAmigo"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome do Amigo do Associado"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.NomeAmigo?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="TelefoneAmigo"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Telefone do Amigo do Associado"
                onChangeText={onChange}
                keyboardType="numeric"
                value={value}
                errorMessage={errors.TelefoneAmigo?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="EmailAmigo"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Email do Amigo do Associado"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.EmailAmigo?.message}
              />
            )}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Enviar Indicação"
              onPress={handleSubmit(handleFriendReferral)}
              isLoading={isLoading}
            />
          </View>
        </ScrollView>
      </View>
      <StatusModal
        visible={showModal}
        isSuccess={isSuccess}
        failedText={failedText}
        onClose={handleCloseModal}
      />
    </>
  );
}
