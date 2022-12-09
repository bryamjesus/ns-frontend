import { Api } from "../helper/Api";

export const getAllSalesService = async () => await Api().get(`/sales`)

export const createSaleMercadoPagoService = async (datos) => await Api().post(`/sales/mercadopago`, datos)

export const updateSaleService = async (datos) => await Api().put(`/sales/${datos.id}`, datos)