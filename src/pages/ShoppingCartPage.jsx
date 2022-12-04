import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { generateRandomString } from "../assets/utils/string.utils";
import Footer from "../components/Footer/Footer";
import NavBarBasic from "../components/NavBar/NavBarBasic";
import ShoppingCart from "../components/shopping-cart/ShoppingCart";
import { AppContext } from "../context/AppContext";
import "../css/shoppingCart.css";

const ShoppingCartPage = () => {
  const [tokenCart, setTokenCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [empty, setEmpty] = useState(false)
  const { cart, getAllProducts, deleteOneProductCart } = useContext(AppContext);

  const getTotal = () => {
    let a = 0;
    getAllProducts().forEach((product) => {
      a += product.price;
    });
    setTotal(a);
  }

  const initData = () => {
    if (cart !== undefined) {
      if (getAllProducts().length !== 0) {
        setTokenCart(getAllProducts());
        getTotal()
      }
      else {
        setEmpty(!empty)
      }
    }
    else {
      console.log("vacio")
      setEmpty(!empty)
    }
  };

  const deleteProduct = (id) => {
    deleteOneProductCart(id);
  };

  useEffect(() => {
    initData();
  }, [cart]);

  return (
    <>
      <NavBarBasic />
      <main>
        <div className="container">
          {
            empty ? (
              <h1>Vacio</h1>
            ) : (
              <div className="shoppingCart">
                <div className="total">
                  <h3 className="total__title">Total:</h3>
                  <h3 className="total__price">S/ {total}</h3>
                  <Link to='/cart-shopping/checkout'>
                    <button className="total__pay">Pagar</button>
                  </Link>
                </div>
                <div className="cartProducts">
                  <h2 className="">Cesta</h2>
                  <article className="carts">
                    {tokenCart?.map((product) => (
                      <ShoppingCart
                        key={product._id + generateRandomString()}
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
            )
          }

        </div>
      </main>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
