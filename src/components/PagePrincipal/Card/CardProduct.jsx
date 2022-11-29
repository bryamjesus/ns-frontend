import { Link } from "react-router-dom";
import { URL_IMG } from "../../../helper/Config";
import "../../../css/products.css";

const CardProduct = ({ id, name, description, price, image }) => {
  return (
    <>
      <Link to={`/${id}`}>
        <div className="product">
          <img className="product__img" src={`${URL_IMG}/${image}`} />
          <div className="product__content">
            <h4 className="product__title">{name}</h4>
            {/* <p>{description}</p> */}
            <div className="product__description">
              <p>S/ {price}</p>
            </div>
            {/* <div>
            <button>CARRITO</button>
            <button>S</button>
          </div> */}
          </div>
        </div>
      </Link>
    </>
  );
};
export default CardProduct;
