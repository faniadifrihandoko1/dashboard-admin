import React, { createContext } from "react";

type TypeSearchContext = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const typeSearchContext: TypeSearchContext = {
  search: "",
  setSearch: () => "",
};

const SearchContext = createContext<TypeSearchContext>(typeSearchContext);

export default SearchContext;
