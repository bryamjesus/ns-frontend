import axios from "axios";
import { Api } from "../helper/Api";
import { URL_API_PRODUCT } from "../helper/Config";

export const getAllProducts = async () => await axios.get(`${URL_API_PRODUCT}`);
