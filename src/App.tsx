import React from "react";
import SearchContext from "./context/searchContext";
import TablePages from "./pages/TablePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MarketplacePage from "./pages/MarketplacePage";
import ProfilePage from "./pages/ProfilePage";
import Signin from "./pages/SiginPage";
import RtlAdminPage from "./pages/RtlAdminPage";
("./pages/MainPages");

function App() {
  const [search, setSearch] = React.useState<string>("");
  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ search, setSearch }}>
        <Routes>
          <Route path="/" index element={<TablePages />} />
          <Route path="/main-dashboard" element={<MainPage />} />
          <Route path="/nft-marketplace" element={<MarketplacePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/rtl-admin" element={<RtlAdminPage />} />
        </Routes>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
