import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

interface SearchInputProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, placeholder = "Search..." }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="relative w-full text-[20px]   font-quicksand">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-[10px]  border bg-white dark:bg-primary border-primary dark:border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary dark:text-gray-400">
          <FaSearch />
        </div>
        <button type="submit" className="absolute right-[3px]  top-1/2 px-3 rounded-r-[5px]  py-[9px] transform -translate-y-1/2 bg-secondary dark:bg-darkbg">
          <HiOutlineAdjustmentsHorizontal className="w-7 h-7" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
