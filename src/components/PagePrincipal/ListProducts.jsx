import { useContext, useEffect, useReducer, useState } from "react";
import { getAllProducts } from "../../service/ProductService";
import CardProduct from "./Card/CardProduct";
import "../../css/products.css";
import { AppContext } from "../../context/AppContext";

const ListProducts = () => {
  const { cart, addProductCart } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  // console.log(cart);

  const productCart = (id) => {
    const addProduct = [...cart, id]
    console.log(addProduct);
    addProductCart(addProduct);
  };

  const listAllProducts = async () => {
    const result = await getAllProducts();
    // console.log(result.data.results);
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
