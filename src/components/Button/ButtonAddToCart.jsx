import { useContext } from "react"
import Swal from "sweetalert2";
import { AppContext } from "../../context/AppContext";

const ButtonAddToCart = ({ objectProduct }) => {
  const { addProductCart } = useContext(AppContext);

  const productCart = () => {
    addProductCart(objectProduct)
    Swal.fire({
      icon: 'success',
      title: `Hemos agregado ${objectProduct.name} al carrito!`,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#0d6efd',
      timer: 1000,
    });
  }

  return <button className="button__cart" onClick={() => productCart()}>Agregar al carrito</button>
}

export default ButtonAddToCart