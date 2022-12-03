import { Link } from "react-router-dom";
import { URL_IMG } from "../../helper/Config";

const ShoppingCart = ({ id, name, image, deleteProduct, price }) => {
  return (
    <>
      <div className="productCart">
        <img className="productCart__img" src={`${URL_IMG}/${image}`} />

        <h3 className="productCart__name">{name}</h3>

        <div className="productCart__price">
          <span>S/ {price}</span>
        </div>
        <div className="cart__links">
          <span className="cart__link" onClick={() => deleteProduct(id)}>
            Eliminar
          </span>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
