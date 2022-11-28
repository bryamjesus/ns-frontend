import axios from "axios";
import { URL_API_USERS_LOGIN } from "../helper/Config";

export const loginUserService = async (datos) =>
  await axios.post(URL_API_USERS_LOGIN, datos);
