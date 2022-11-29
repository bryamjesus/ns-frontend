import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const AppContext = React.createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [idUser, setIdUser] = useState(null);
  const [name, setname] = useState(null);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(localStorage.token);
  const [cart, setCart] = useState([]);

  const addProductCart = (objectId) => {
    console.log(objectId)
    setCart(objectId);
    localStorage.cart = cart
  };

  const login = (data) => {
    const token = data.token;
    const decoded = jwt_decode(token);
    console.log("decoded => ", decoded);
    setToken(token);
    setIdUser(decoded.userId);
    setname(decoded.user);
    setRole(decoded.role);
    localStorage.token = token;
  };

  const logout = () => {
    setIdUser(null);
    setname(null);
    setRole(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    console.log("UserProvider useEffect");
    if (token) {
      console.log("Sí hay token");
      try {
        const decoded = jwt_decode(token);
        setIdUser(decoded.userId);
        setname(decoded.user);
        setRole(decoded.role);
      } catch (error) {
        console.log("Token inválido");
      }
    }
  }, []);

  return (
    <Provider
      value={{ token, idUser, name, role, login, logout, addProductCart, cart }}
    >
      {children}
    </Provider>
  );
};

export { AppProvider, AppContext };
