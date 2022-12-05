import { URL_IMG } from "../../../helper/Config";
import '../../../css/product.css'

const ShowProduct = ({ name, image, price, description }) => {
  return (
    <>
      <div className="detail">
        <img className="detail__img" src={`${URL_IMG}/${image}`} />
        <div className="detail__container">
          <h3 className="detail__title">{name}</h3>
          <span className="detail__price">S/. {price}</span>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
