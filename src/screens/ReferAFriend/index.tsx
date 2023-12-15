import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
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
  const [isDisabled, setIsDisabled] = useState(false);

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ReferralFormDataProps>({
    resolver: yupResolver(referAFriendSchema),
  });

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
      setIsDisabled(true);

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
    } catch (error) {
      Alert.alert("Erro", "Erro interno. Tente novamente mais tarde");
    } finally {
      setIsLoading(false);
      setIsDisabled(false);
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Indique um Amigo" />
      <View style={styles.formContainer}>
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
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Enviar Indicação"
          onPress={handleSubmit(handleFriendReferral)}
          isLoading={isLoading}
          disabled={isDisabled}
        />
      </View>
    </View>
  );
}
