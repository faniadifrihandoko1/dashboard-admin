import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import Input from "../../Elements/Input/Input";

interface SearchBarProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  return (
    <div className="relative rounded-full">
      <IoSearchSharp
        size={20}
        className="absolute fa fa-search text-gray-400 top-3 left-4"
      />
      <Input
        type="text"
        className="bg-bgBody h-10 w-full px-12 rounded-full focus:outline-none hover:cursor-pointer"
        name="search"
        placeholder="Search..."
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="absolute top-4 right-5 border-l pl-4">
        <i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
      </span>
    </div>
  );
};

export default SearchBar;
