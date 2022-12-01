import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const AppContext = React.createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [idUser, setIdUser] = useState(null);
  const [name, setname] = useState(null);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(localStorage.token);
  const [cart, setCart] = useState(localStorage.cart); //

  const addProductCart = (objectId) => {
    if (localStorage.cart === undefined) {
      setCart(objectId);
      localStorage.cart = objectId;
    } else {
      const a = localStorage.cart;
      const allProducts = a.split(",");
      allProducts.push(objectId);
      console.log(allProducts);
      const newAllProducts = allProducts.join();
      setCart(newAllProducts);
      localStorage.cart = newAllProducts;
    }
  };

  const getAllCart = () => {
    return localStorage.cart;
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
    console.log("useeffectt => ", cart);
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
      value={{
        token,
        idUser,
        name,
        role,
        cart,
        login,
        logout,
        addProductCart,
        getAllCart,
      }}
    >
      {children}
    </Provider>
  );
};

export { AppProvider, AppContext };
