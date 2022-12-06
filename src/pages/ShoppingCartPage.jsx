import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { generateRandomString } from "../assets/utils/string.utils";
import Empty from "../components/Empty/Empty";
import Footer from "../components/Footer/Footer";
import NavBarBasic from "../components/NavBar/NavBarBasic";
import ShoppingCart from "../components/shopping-cart/ShoppingCart";
import { AppContext } from "../context/AppContext";
import "../css/shoppingCart.css";
import { createSaleMercadoPagoService } from "../service/SaleService";

const ShoppingCartPage = () => {
  const { cart, getAllProducts, deleteOneProductCart, idUser } = useContext(AppContext);
  const [tokenCart, setTokenCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [empty, setEmpty] = useState(false)

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

  const handlePayment = () => {
    Swal.fire({
      title: `Pagar el importe de $ ${total}`,
      text: "Este proceso no se puede revertir!",
      showCancelButton: true,
      confirmButtonColor: '#3ebfff',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, proceder con el pago!',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const venta = {
            client_id: idUser,
            total,
            detail: getAllProducts().map(product => {
              return {
                product: product.name,
                price: product.price,
                amount: 1
              }
            })
          };
          const result = await createSaleMercadoPagoService(venta);
          const data = result.data;
          window.location.replace(data.url);
        } catch (error) {
          console.error(error);
        }
      }
    });
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
              <Empty />
            ) : (
              <div className="shoppingCart">
                <div className="total">
                  <h3 className="total__title">Total:</h3>
                  <h3 className="total__price">S/ {total}</h3>
                  <button disabled={(idUser === null)} onClick={handlePayment} className={(idUser === null) ? `total__pay--not` : `total__pay`}>Pagar</button>
                  {
                    idUser === null && (<p><Link to='/login'>Inicie sesion</Link> o registrese para realizar el pago</p>)
                  }
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
