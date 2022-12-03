import { URL_IMG } from "../../helper/Config";

const ShoppingCart = ({ id, name, image, deleteProduct, price }) => {
  return (
    <>
      <div className="pdx-1 bd-2-gray">
        <div className="cart">
          <div className="cart__img">
            <img className="cart_img2" src={`${URL_IMG}/${image}`} />
          </div>

          <div className="cart__header">
            <h3 className="cart__title">{name}</h3>
          </div>

          <span className="cart__price">S/ {price}</span>

          <div className="cart__links">
            <span className="cart__link" onClick={() => deleteProduct(id)}>
              Eliminar
            </span>
          </div>
        </div>
      </div>

    </>
  );
};

export default ShoppingCart;
