import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer"
import NavBarCheckout from "../components/NavBar/NavBarChecout"
import { AppContext } from "../context/AppContext";

const Checkout = () => {
  const [tokenCart, setTokenCart] = useState([]);
  const { cart, getAllProducts } = useContext(AppContext);

  const initData = () => {
    if (cart !== undefined) {
      if (getAllProducts().length !== 0) {
        console.log(getAllProducts())
        setTokenCart(getAllProducts());
      }
    }
  };

  useEffect(() => {
    initData();
  }, []);
  return (
    <>
      <NavBarCheckout />
      <div className="container">
        <h1>
          Pasarela de pago
        </h1>
      </div>

      <Footer />
    </>
  )
}

export default Checkout