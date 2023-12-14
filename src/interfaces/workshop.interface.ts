export interface Workshops {
  Id: number;
  Nome: string;
  Descricao: string;
  DescricaoCurta: string;
  Endereco: string;
  Latitude: string;
  Longitude: string;
  Foto: string;
  AvaliacaoUsuario: number;
  CodigoAssociacao: number;
  Email: string;
  Telefone1: string | null;
  Telefone2: string | null;
  Ativo: boolean;
}
