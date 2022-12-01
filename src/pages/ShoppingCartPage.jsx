import { useContext, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavBarBasic from "../components/NavBar/NavBarBasic";
import { AppContext } from "../context/AppContext";

const ShoppingCartPage = () => {
  const { cart, addProductCart, getAllCart } = useContext(AppContext);

  useEffect(() => {
    console.log(typeof cart);
    console.log(cart);
  }, []);

  return (
    <>
      <NavBarBasic />
      <main>
        <div className="container">
          <h2>Carrito de compras</h2>
          <h3>Productos</h3>
          <article>
            {}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
