import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import NavBarBasic from "../components/NavBar/NavBarBasic";
import ShoppingCart from "../components/shopping-cart/ShoppingCart";
import { AppContext } from "../context/AppContext";
import "../css/shoppingCart.css";

const ShoppingCartPage = () => {
  const [tokenCart, setTokenCart] = useState([]);
  const [total, setTotal] = useState(0);
  const { cart, getAllProducts, deleteOneProductCart } = useContext(AppContext);

  const getProducts = () => {
    if (cart !== undefined) {
      setTokenCart(getAllProducts());
    }
  };

  const totalPrice = () => {
    if (cart !== undefined) {
      let a = 0;
      getAllProducts().forEach((product) => {
        a += product.price;
      });
      setTotal(a);
    }
  };

  const deleteProduct = (id) => {
    deleteOneProductCart(id);
  };

  // useEffect(() => {
  //   totalPrice();
  // }, []);

  useEffect(() => {
    getProducts();
    totalPrice();
  }, [cart]);

  return (
    <>
      <NavBarBasic />
      <main>
        <div className="container">
          <div className="shoppingCart">
            <div className="total">
              <h3 className="total__title">Total:</h3>
              <h3 className="total__price">S/ {total}</h3>
              <button className="total__pay">Pagar</button>
            </div>
            <div className="cartProducts">
              <h2 className="">Cesta</h2>
              <article className="carts">
                {tokenCart?.map((product) => (
                  <ShoppingCart
                    key={product._id}
                    id={product._id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    deleteProduct={deleteProduct}
                  />
                ))}
              </article>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
