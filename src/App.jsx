import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import ConfirmationPage from "./pages/ConfirmationPage";
import LoginPage from "./pages/LoginPage";
import PrincipalPage from "./pages/PrincipalPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/*" element={<PrincipalPage />} />
          <Route path="/cart-shopping" element={<ShoppingCartPage />} />
          <Route path="/cart-shopping/confirmation" element={<ConfirmationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
