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
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { api } from "../../services/api";
import { handleIsValidCPF } from "../../utils/HandleIsValidCPF";
import { styles } from "./styles";

const referAFriendSchema = yup.object({
  NomeAssociado: yup
    .string()
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "Deve conter apenas letras do alfabeto."
    )
    .required("Informe o nome do associado."),
  CodigoAssociacao: yup
    .string()
    .matches(/^[0-9]+$/, "Informe apenas números")
    .min(3, "O código precisa ter pelo menos 3 dígitos.")
    .required("Informe o código da associação."),
  CpfAssociado: yup
    .string()
    .required("Informe o CPF.")
    .test("handleIsValidCPF", "Informe algum CPF válido", handleIsValidCPF),
  EmailAssociado: yup
    .string()
    .required("Informe o e-mail do associado")
    .email("E-mail inválido."),
  TelefoneAssociado: yup
    .string()
    .matches(/^[0-9]+$/, "Informe apenas números")
    .min(10, "O telefone deve ter pelo menos 10 números. Apenas números.")
    .required("Informe o telefone do associado"),
  PlacaVeiculoAssociado: yup
    .string()
    .required("Informe a placa do veículo do associado")
    .matches(
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.{5,8})/,
      "Deve conter entre 5 e 8 caracteres, contendo apenas números e letras maísculas."
    ),
  NomeAmigo: yup
    .string()
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "Deve conter apenas letras do alfabeto."
    )
    .required("Informe o nome do amigo indicado."),
  TelefoneAmigo: yup
    .string()
    .matches(/^[0-9]+$/, "Informe apenas números")
    .min(10, "O telefone deve ter pelo menos 10 números. Apenas números.")
    .required("Informe o telefone do amigo indicado."),
  EmailAmigo: yup
    .string()
    .required("Informe o e-mail do amigo indicado")
    .email("E-mail inválido."),
});

export function ReferAFriend() {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [failedText, setFailedText] = useState<string>();

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const brazilCurrentDate = new Date().toLocaleString("pt-BR", {
    hour12: false,
  });

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
    DataCriacao = brazilCurrentDate,
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
        <Header title="Indique um amigo" />
        <ScrollView
          style={styles.formContainer}
          contentContainerStyle={styles.formContainerAlignment}
        >
          <Controller
            control={control}
            name="NomeAssociado"
            render={({ field: { onChange, value } }) => (
              <Input
                label="Nome do associado"
                placeholder="Nome Sobrenome"
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
                  label="Codigo da associação"
                  placeholder="000"
                  onChangeText={onChange}
                  value={value}
                  customStyle={styles.smallInput}
                  keyboardType="numeric"
                  errorMessage={errors.CodigoAssociacao?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="CpfAssociado"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="CPF do associado"
                  placeholder="00000000000"
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
                label="Email do associado"
                placeholder="email@email.com"
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
                  label="Telefone do associado"
                  placeholder="00999999999"
                  onChangeText={onChange}
                  value={value}
                  customStyle={styles.smallInput}
                  keyboardType="numeric"
                  errorMessage={errors.TelefoneAssociado?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="PlacaVeiculoAssociado"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Placa do associado"
                  placeholder="AAA0A00"
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
                label="Nome do amigo do associado"
                placeholder="Nome Sobrenome"
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
                label="Telefone do amigo do associado"
                placeholder="00999999999"
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                errorMessage={errors.TelefoneAmigo?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="EmailAmigo"
            render={({ field: { onChange, value } }) => (
              <Input
                label="Email do amigo do associado"
                placeholder="email@email.com"
                onChangeText={onChange}
                value={value}
                returnKeyType="send"
                onSubmitEditing={handleSubmit(handleFriendReferral)}
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
