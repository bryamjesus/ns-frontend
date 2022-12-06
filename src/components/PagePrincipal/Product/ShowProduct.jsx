import { URL_IMG } from "../../../helper/Config";
import '../../../css/product.css'
import ButtonAddToCart from "../../Button/ButtonAddToCart";

const ShowProduct = ({ name, image, price, description, product }) => {
  return (
    <>
      <div className="detail">
        <div>
          <img className="detail__img" src={`${URL_IMG}/${image}`} />
        </div>
        <div className="detail__container">
          <h3 className="detail__title">{name}</h3>
          <span className="detail__price">S/. {price}</span>
          <p>{description}</p>
          <ButtonAddToCart objectProduct={product} />
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
