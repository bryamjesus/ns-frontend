import { useContext, useEffect, useReducer, useState } from "react";
import { getAllProducts } from "../../service/ProductService";
import CardProduct from "./Card/CardProduct";
import "../../css/products.css";
import { AppContext } from "../../context/AppContext";
import Swal from "sweetalert2";

const ListProducts = () => {
  const { addProductCart } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  const productCart = (id) => {
    addProductCart(id);
    Swal.fire({
      icon: 'success',
      title: `Hemos agregado ${id.name} al carrito!`,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#0d6efd',
      timer: 1000,
    });
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
            objetoTotal={product}
          />
        ))}
      </section>
    </main>
  );
};

export default ListProducts;
