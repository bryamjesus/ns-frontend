import { URL_IMG } from "../../../helper/Config";

const ShowProduct = ({ name, image }) => {
  return (
    <>
      <div className="detail">
        <div className="detail__img">
          <img src={`${URL_IMG}/${image}`} />
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
