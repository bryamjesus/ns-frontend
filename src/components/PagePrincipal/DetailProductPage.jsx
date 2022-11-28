import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../service/ProductService";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const showProduct = async () => {
    const result = await getOneProduct(id);
    console.log(result.data);
    setProduct(product?.data);
  };

  useEffect(() => {
    showProduct();
  }, []);

  return (
    <>
      <h1>{id}</h1>
      <p>{product?.name}</p>
    </>
  );
};
export default DetailProductPage;
