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

  const addProductCart = (objectProduct) => {
    if (localStorage.cart === undefined) {
      const stringObject = JSON.stringify([objectProduct]);
      setCart(stringObject);
      localStorage.cart = stringObject;
    } else {
      // (localStorage.cart !== undefined)
      const allProducts = JSON.parse(localStorage.cart);
      const newProducts = JSON.stringify([...allProducts, objectProduct]);
      setCart(newProducts);
      localStorage.cart = newProducts;
    }
  };

  const getAllProducts = () => {
    if (localStorage.cart !== undefined) {
      const allProducts = JSON.parse(localStorage.cart);
      return allProducts;
    }
    return;
  };

  const deleteOneProductCart = (idProduct) => {
    const allProducts = JSON.parse(localStorage.cart);
    const productIndex = allProducts.findIndex(
      (product) => idProduct === product._id
    );
    allProducts.splice(productIndex, 1);
    const a = JSON.stringify([...allProducts]);
    setCart(a);
    localStorage.cart = a;
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
    // console.log("useeffectt => ", cart);
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
        getAllProducts,
        deleteOneProductCart,
      }}
    >
      {children}
    </Provider>
  );
};

export { AppProvider, AppContext };

// if (localStorage.cart === undefined) {
//   setCart(objectId);
//   localStorage.cart = objectId;
// } else {
//   const a = localStorage.cart;
//   const allProducts = a.split(",");
//   allProducts.push(objectId);
//   const newAllProducts = allProducts.join();
//   setCart(newAllProducts);
//   localStorage.cart = newAllProducts;
// }
