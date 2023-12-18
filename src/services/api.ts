import axios from "axios";

const api = axios.create({
  baseURL: "http://app.hinovamobile.com.br/ProvaConhecimentoWebApi",

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export { api };
