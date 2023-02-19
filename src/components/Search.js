import React, { useContext } from "react";
import CountryDropdown from "../components/CountryDropdown";
import PropertyDropdown from "../components/PropertyDropdown";
import PriceRangeDropdown from "../components/PriceRangeDropdown";
// import Icons

import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";
const Search = () => {
  const { handleSearch } = useContext(HouseContext);
  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent backdrop-blur-sm rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleSearch()}
        className="bg-violet-700 hover:bg-violet-800 w-full lg:max-w-[162px] items-center flex justify-center text-white text-lg rounded-lg transition py-2"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
