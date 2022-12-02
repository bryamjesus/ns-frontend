import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import NavBarBasic from "../components/NavBar/NavBarBasic";
import { AppContext } from "../context/AppContext";
import { getOneProduct } from "../service/ProductService";

const ShoppingCartPage = () => {
  const [tokenCart, setTokenCart] = useState([]);
  const { getAllProducts } = useContext(AppContext);

  const getProducts = () => {
    if (getAllProducts() !== undefined) {
      console.log(getAllProducts());
      setTokenCart(getAllProducts());
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavBarBasic />
      <main>
        <div className="container">
          <h2>Carrito de compras</h2>
          <h3>Productos</h3>
          <article>
            {tokenCart?.map((product) => (
              <div key={product._id}>{product.description}</div>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;