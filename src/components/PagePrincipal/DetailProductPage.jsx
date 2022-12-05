import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../service/ProductService";
import Loading from "../Loading/Loading";
import ShowProduct from "./Product/ShowProduct";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [cargando, setCargando] = useState(true);

  const getProduct = async () => {
    const result = await getOneProduct(id);
    console.log(result.data);
    if (result.data) {
      setCargando(false);
      setProduct(result?.data);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="container">
        {cargando ? (
          <Loading />
        ) : (
          <ShowProduct key={product._id} name={product.name} image={product.image} price={product.price} description={product.description} />
        )}
      </div>
    </>
  );
};
export default DetailProductPage;
