import { useContext } from "react";
import Footer from "../components/Footer/Footer";
import NavBarBasic from "../components/NavBar/NavBarBasic";
import { AppContext } from "../context/AppContext";

const ShoppingCartPage = () => {
  const { cart, addProductCart } = useContext(AppContext);

  return (
    <>
      <NavBarBasic />
      <main>
        <div className="container">
          <h2>Carrito de compras</h2>
          <h3>Productos</h3>
          <article>
            {
              cart.map(a =>(
                <h1 key={a}>{a}</h1>
              ))
            }
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
