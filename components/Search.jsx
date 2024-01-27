import React from "react";
import { Pointer, Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="w-[280px] border border-[#D6D6D6] rounded-xl flex px-2">
      <input placeholder="Search..." className="outline-none" type="text" />
      <SearchIcon size={40} color="#726f6f" className="cursor-pointer" />
    </div>
  );
};

export default Search;
