import { useContext, useEffect, useReducer, useState } from "react";
import { getAllProducts } from "../../service/ProductService";
import CardProduct from "./Card/CardProduct";
import "../../css/products.css";
import { AppContext } from "../../context/AppContext";

const ListProducts = () => {
  const { addProductCart } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  const productCart = (id) => {
    addProductCart(id);
  };

  const listAllProducts = async () => {
    const result = await getAllProducts();
    setProducts(result.data.results);
  };

  useEffect(() => {
    listAllProducts();
  }, []);

  return (
    <main>
      <section className="container products">
        {products.map((product) => (
          <CardProduct
            key={product._id}
            id={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            productCart={productCart}
          />
        ))}
      </section>
    </main>
  );
};

export default ListProducts;
