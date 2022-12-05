import { Link } from "react-router-dom";
import { URL_IMG } from "../../../helper/Config";
import "../../../css/products.css";

const CardProduct = ({ id, name, description, price, image, productCart, objetoTotal }) => {
  return (
    <>
      <div className="product">
        <Link to={`/${id}`}>
          <img className="product__img" src={`${URL_IMG}/${image}`} />
        </Link>
        <div className="product__content">
          <Link to={`/${id}`}>
            <h4 className="product__title">{name}</h4>
            <div className="product__description">
              <p>S/ {price}</p>
            </div>
          </Link>
          <button className="product__button" onClick={() => productCart(objetoTotal)}>CARRITO</button>
        </div>
      </div>
    </>
  );
};
export default CardProduct;
