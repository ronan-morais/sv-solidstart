// Generated by Xata Codegen 0.23.5. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "trabalhos",
    columns: [
      { name: "nome", type: "string" },
      { name: "farda", type: "string" },
      { name: "hinario", type: "string" },
      {
        name: "dataInicio",
        type: "datetime",
        notNull: true,
        defaultValue: "now",
      },
      { name: "horaInicio", type: "string" },
      { name: "dataFim", type: "datetime" },
      { name: "horaFim", type: "string" },
      { name: "observacao", type: "text" },
      { name: "tipo", type: "link", link: { table: "tiposTrabalho" } },
      { name: "dataCriacao", type: "datetime", defaultValue: "now" },
      { name: "dataUpdate", type: "datetime", defaultValue: "now" },
    ],
  },
  {
    name: "tiposTrabalho",
    columns: [
      { name: "nome", type: "string" },
      { name: "descricao", type: "text" },
    ],
  },
  {
    name: "amigos",
    columns: [
      { name: "dados", type: "link", link: { table: "dadosUsuarios" } },
      { name: "dataCriacao", type: "datetime", defaultValue: "now" },
      { name: "dataUpdate", type: "datetime" },
      { name: "usuario", type: "string" },
      { name: "password", type: "string" },
      { name: "email", type: "email", unique: true },
      { name: "avatar", type: "string" },
      {
        name: "anamnese",
        type: "link",
        link: { table: "anamneses" },
        unique: true,
      },
    ],
  },
  {
    name: "dadosUsuarios",
    columns: [
      {
        name: "dataCriacao",
        type: "datetime",
        notNull: true,
        defaultValue: "now",
      },
      { name: "dataUpdate", type: "datetime", defaultValue: "now" },
      { name: "genero", type: "string" },
      { name: "nome", type: "string" },
      { name: "apelido", type: "string" },
      { name: "cpf", type: "string", unique: true },
      { name: "telefone", type: "string", unique: true },
      { name: "whatsapp", type: "string" },
      { name: "nascimento", type: "datetime" },
      { name: "logradouro", type: "string" },
      { name: "bairro", type: "string" },
      { name: "cidade", type: "string" },
      { name: "uf", type: "string" },
      { name: "nacionalidade", type: "string" },
      { name: "contatoEmergencia", type: "string" },
      { name: "estadoCivil", type: "string" },
      { name: "escolaridade", type: "string" },
      { name: "observacao", type: "text" },
    ],
  },
  { name: "funcoes", columns: [{ name: "funcao", type: "string" }] },
  {
    name: "listas",
    columns: [
      { name: "amigo", type: "link", link: { table: "amigos" } },
      { name: "trabalho", type: "link", link: { table: "trabalhos" } },
      { name: "funcao", type: "link", link: { table: "funcoes" } },
    ],
  },
  {
    name: "anamneses",
    columns: [
      {
        name: "dataCriacao",
        type: "datetime",
        notNull: true,
        defaultValue: "now",
      },
      {
        name: "dataUpdate",
        type: "datetime",
        notNull: true,
        defaultValue: "now",
      },
      { name: "queixaClinica", type: "string" },
      { name: "medicacaoContinua", type: "string" },
      { name: "psicotropico", type: "string" },
      { name: "internacao", type: "string" },
      { name: "doencaDiagnosticada", type: "string" },
      { name: "humor", type: "string" },
      { name: "situacaoMental", type: "string" },
      { name: "compulsao", type: "string" },
      { name: "tratamentoPsi", type: "string" },
      { name: "centrosReligiosos", type: "string" },
      { name: "familiaReligiao", type: "string" },
      { name: "familiaAprovacao", type: "string" },
      { name: "comoSoube", type: "string" },
      { name: "conhecidoFdj", type: "string" },
      { name: "primeiroTrabalho", type: "string" },
      { name: "anexo", type: "string" },
      { name: "observacao", type: "string" },
      { name: "pcd", type: "string" },
    ],
  },
  { name: "comunicados", columns: [] },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Trabalhos = InferredTypes["trabalhos"];
export type TrabalhosRecord = Trabalhos & XataRecord;

export type TiposTrabalho = InferredTypes["tiposTrabalho"];
export type TiposTrabalhoRecord = TiposTrabalho & XataRecord;

export type Amigos = InferredTypes["amigos"];
export type AmigosRecord = Amigos & XataRecord;

export type DadosUsuarios = InferredTypes["dadosUsuarios"];
export type DadosUsuariosRecord = DadosUsuarios & XataRecord;

export type Funcoes = InferredTypes["funcoes"];
export type FuncoesRecord = Funcoes & XataRecord;

export type Listas = InferredTypes["listas"];
export type ListasRecord = Listas & XataRecord;

export type Anamneses = InferredTypes["anamneses"];
export type AnamnesesRecord = Anamneses & XataRecord;

export type Comunicados = InferredTypes["comunicados"];
export type ComunicadosRecord = Comunicados & XataRecord;

export type DatabaseSchema = {
  trabalhos: TrabalhosRecord;
  tiposTrabalho: TiposTrabalhoRecord;
  amigos: AmigosRecord;
  dadosUsuarios: DadosUsuariosRecord;
  funcoes: FuncoesRecord;
  listas: ListasRecord;
  anamneses: AnamnesesRecord;
  comunicados: ComunicadosRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://secretaria-virtual-ll4gso.eu-west-1.xata.sh/db/secretaria-virtual",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
