import TablePages from "./pages/TablePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MarketplacePage from "./pages/MarketplacePage";
import ProfilePage from "./pages/ProfilePage";
import Signin from "./pages/SiginPage";
import RtlAdminPage from "./pages/RtlAdminPage";
("./pages/MainPages");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<TablePages />} />
        <Route path="/main-dashboard" element={<MainPage />} />
        <Route path="/nft-marketplace" element={<MarketplacePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/rtl-admin" element={<RtlAdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
