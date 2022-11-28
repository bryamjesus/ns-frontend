/**
 * TODO: BASE DE LAS URL
 */
const URL_BASE = `http://localhost:3000`;
export const URL_API = `${URL_BASE}/api`;
export const URL_IMG = `${URL_BASE}/products`;

/**
 * TODO: USUARIOS
 */
const ROUTE_URL_USER = `/user`;
const ROUTE_URL_LOGIN = `/login`;
export const URL_API_USERS = `${URL_API}${ROUTE_URL_USER}`;
export const URL_API_USERS_LOGIN = `${URL_API_USERS}${ROUTE_URL_LOGIN}`;

/**
 * TODO: PRODUCTOS
 */
const ROUTE_URL_PRODUCT = `/product`;
export const URL_API_PRODUCT = `${URL_API}${ROUTE_URL_PRODUCT}`;
