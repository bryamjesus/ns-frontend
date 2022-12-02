import { Link } from "react-router-dom";
import { URL_IMG } from "../../../helper/Config";
import "../../../css/products.css";

const CardProduct = ({ id, name, description, price, image, productCart, objetoTotal }) => {
  return (
    <>
      <div className="product">
        <Link to={`/${id}`}>
          <img className="product__img" src={`${URL_IMG}/${image}`} />
          <div className="product__content">
            <h4 className="product__title">{name}</h4>
            {/* <p>{description}</p> */}
            <div className="product__description">
              <p>S/ {price}</p>
            </div>
          </div>
        </Link>
        <div>
          <button onClick={() => productCart(objetoTotal)}>CARRITO</button>
          {/* <button>S</button> */}
        </div>
      </div>
    </>
  );
};
export default CardProduct;
