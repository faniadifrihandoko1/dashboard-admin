import React, { useContext } from "react";

import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import SearchContext from "../../../context/searchContext";

interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg0: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { setSearch } = useContext(SearchContext);

  return (
    <div className="sticky top-0 z-30 flex flex-col md:flex-row md:justify-between md:items-center p-6 w-full transition-all duration-300 backdrop-blur-3xl bg-white/10">
      <div className="md:mt-2">
        <div className="breadcumbs-page text-sm font-medium text-gray-700">
          <h2>Pages / Data Tables</h2>
        </div>
        <div className="page-title text-3xl font-bold">
          <h1>Data Tables</h1>
        </div>
      </div>
      <div className="flex items-center mt-4 bg-white dark:bg-black dark:text-white h-16 p-3 rounded-full gap-2 text-gray-500 shadow-lg">
        <SearchBar onChange={setSearch} />
        <NavIcons setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      </div>
    </div>
  );
};

export default Navbar;
