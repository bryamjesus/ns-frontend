import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import LoginPage from "./pages/LoginPage";
import PrincipalPage from "./pages/PrincipalPage";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Hola mundo</h1>
      <AppProvider>
        <Routes>
          <Route index element={<PrincipalPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
