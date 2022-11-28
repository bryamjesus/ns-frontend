import { Link } from "react-router-dom";
import { URL_IMG } from "../../helper/Config";

const CardProduct = ({ id, name, description, price, image }) => {
  return (
    <>
      <Link to={`/${id}`}>
        <div className="">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>
            <span>Precio: </span>S/. {price}
          </p>
          <img src={`${URL_IMG}/${image}`} />
        </div>
      </Link>
    </>
  );
};
export default CardProduct;
