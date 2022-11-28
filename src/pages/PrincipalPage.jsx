import { Route, Routes } from "react-router-dom";
import NavBarPrincipal from "../components/NavBar/NavBarPrincipal";
import ListProducts from "../components/PagePrincipal/ListProducts";
import DetailProductPage from "./DetailProductPage";

const PrincipalPage = () => {
  return (
    <>
      <NavBarPrincipal />
      <Routes>
        <Route index element={<ListProducts />} />
        <Route path="/:id" element={<DetailProductPage />} />
      </Routes>
    </>
  );
};
export default PrincipalPage;
