import { Menu } from "@headlessui/react";
import React, { useContext, useState } from "react";
import { RiArrowDownLine, RiArrowUpLine, RiH2, RiMapPinLine } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  console.log(countries);
  const [isopen, setisOpen] = useState(true);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setisOpen(!isopen)} className="dropdown-btn w-full text-left">
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isopen ? <RiArrowUpLine className="dropdown-icon-secondary" /> : <RiArrowDownLine className="dropdown-icon-secondary" />}
      </Menu.Button>
      <Menu.Items>
        {countries.map((country, index) => (
          <Menu.Item as="li" key={index} className="cursor-pointer hover:text-violet-700 transition" onClick={() => setCountry(country)}>
            {country}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
export default CountryDropdown;
