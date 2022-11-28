import { useEffect, useState } from "react";
import Card from "../components/CARDS/Card";
import NavBarPrincipal from "../components/NavBar/NavBarPrincipal";
import { getAllProducts } from "../service/ProductService";

const PrincipalPage = () => {
  const [products, setProducts] = useState([]);

  const listAllProducts = async () => {
    const result = await getAllProducts();
    console.log(result.data.results);
    setProducts(result.data.results);
  };

  useEffect(() => {
    listAllProducts();
    // console.log("HOLA EFFECT");
    // console.log(products);
  }, []);

  return (
    <>
      <NavBarPrincipal />
      <div className="container">
        {products.map((product) => (
          <Card
            key={product._id}
            id={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
};
export default PrincipalPage;
