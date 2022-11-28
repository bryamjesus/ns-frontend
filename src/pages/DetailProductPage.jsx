import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>{id}</h1>
      <p>Hola producto</p>
    </>
  );
};
export default DetailProductPage;
