import axios from "axios";
import { Api } from "../helper/Api";
import { URL_API_USERS_LOGIN } from "../helper/Config";

export const loginUserService = async (datos) =>
  await axios.post(URL_API_USERS_LOGIN, datos);

export const getOneUser = async (id) => await Api().get(`/user/${id}`)
