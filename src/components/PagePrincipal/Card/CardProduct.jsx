import { Link } from "react-router-dom";
import { URL_IMG } from "../../../helper/Config";
import "../../../css/products.css";
import ButtonAddToCart from "../../Button/ButtonAddToCart";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { ROLE_USER } from "../../../assets/utils/string.utils";
import ButtonDeleteProduct from "../../Button/ButtonDeleteProduct";

const CardProduct = ({ id, name, price, image, objetoTotal }) => {
  const { role } = useContext(AppContext);
  const urlAdminEdit = () => role !== ROLE_USER.ADMIN ? `/${id}` : `/edit/${id}`


  return (
    <>
      <div className="product">
        <Link to={urlAdminEdit()}>
          <img className="product__img" src={`${URL_IMG}/${image}`} />
        </Link>
        <div className="product__content">
          <Link to={`/${id}`}>
            <h4 className="product__title">{name}</h4>
            <div className="product__description">
              <p>S/ {price}</p>
            </div>
          </Link>
          {
            role === ROLE_USER.ADMIN ? (
              <ButtonDeleteProduct />
            ) : (
              <ButtonAddToCart objectProduct={objetoTotal} />
            )
          }

          {/* <button className="product__button" onClick={() => productCart(objetoTotal)}>CARRITO</button> */}
        </div>
      </div>
    </>
  );
};
export default CardProduct;
