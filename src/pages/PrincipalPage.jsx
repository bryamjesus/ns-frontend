import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBarPrincipal from "../components/NavBar/NavBarPrincipal";
import DetailProductPage from "../components/PagePrincipal/DetailProductPage";
import ListProducts from "../components/PagePrincipal/ListProducts";

const PrincipalPage = () => {
  return (
    <>
      <NavBarPrincipal />
      <Routes>
        <Route index element={<ListProducts />} />
        <Route path="/:id" element={<DetailProductPage />} />
      </Routes>
      <Footer />
    </>
  );
};
export default PrincipalPage;
