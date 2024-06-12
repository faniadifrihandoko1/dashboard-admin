import React from "react";
import SearchContext from "./context/searchContext";
import TablePages from "./pages/TablePages";

function App() {
  const [search, setSearch] = React.useState<string>("");
  console.log(search);
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <TablePages />
    </SearchContext.Provider>
  );
}

export default App;
