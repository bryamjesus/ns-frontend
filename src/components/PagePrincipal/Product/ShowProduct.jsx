import { URL_IMG } from "../../../helper/Config";
import '../../../css/product.css'
import ButtonAddToCart from "../../Button/ButtonAddToCart";
import { useEffect, useState } from "react";
import { getAllSize } from "../../../assets/utils/string.utils";

const ShowProduct = ({ name, image, price, description, category, product }) => {
  const [categories, setCategories] = useState([])

  const size = () => {
    setCategories(getAllSize(category))
  }

  useEffect(() => {
    size()
  }, [])
  return (
    <>
      <div className="detail">
        <div>
          <img className="detail__img" src={`${URL_IMG}/${image}`} />
        </div>
        <div className="detail__container">
          <h3 className="detail__title">{name}</h3>
          <span className="detail__price">S/. {price} PEN</span>
          <p>{description}</p>
          <div className="detail__categories">
            <div className="sizes">
              <h4 className="detail__subtitle">Tallas</h4>
              <div className="detail__sizes">
                {
                  categories.onlySizes?.map((size) => (
                    <div key={size} className="detail__size">{size}</div>
                  ))
                }
              </div>
            </div>
            <div className="event">
              <h4 className="detail__subtitle">categories</h4>
              <div className="detail__events">
                {
                  categories.onlyEvent?.map((size) => (
                    <div key={size} className="detail__size">{size}</div>
                  ))
                }
              </div>
            </div>
          </div>
          <ButtonAddToCart objectProduct={product} />
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
