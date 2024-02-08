import React, { useState } from "react";
import searchIcon from "../../../assets/icons/search.svg";

const SearchProducts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Perform search logic here
  };

  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <img src={searchIcon} alt="Search" className="h-5 w-5"/>
       
      </span>
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search for anything..."
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleSearch}
      />
    </label>
  );
};

export default SearchProducts;
