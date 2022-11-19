import axios from "axios";
import { Api } from "../helper/Api";
import { API_URL, ROUTE_URL_USERS } from "../helper/Config";

export const getAllProducts = async () =>
  await axios.get(`${API_URL}/${ROUTE_URL_USERS}`);
