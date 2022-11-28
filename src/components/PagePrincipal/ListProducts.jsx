import { useEffect, useState } from "react";
import { getAllProducts } from "../../service/ProductService";
import CardProduct from "../Card/Card";

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  const listAllProducts = async () => {
    const result = await getAllProducts();
    console.log(result.data.results);
    setProducts(result.data.results);
  };

  useEffect(() => {
    listAllProducts();
  }, []);

  return (
    <div className="container">
      {products.map((product) => (
        <CardProduct
          key={product._id}
          id={product._id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ListProducts;
