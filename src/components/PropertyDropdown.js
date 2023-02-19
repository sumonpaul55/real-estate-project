import { Menu } from "@headlessui/react";
import React, { useContext, useState } from "react";
import { RiArrowDownLine, RiArrowUpLine, RiHome5Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  // console.log(property);
  const [isopen, setisOpen] = useState(true);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setisOpen(!isopen)} className="dropdown-btn w-full text-left">
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{property}</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isopen ? <RiArrowDownLine className="dropdown-icon-secondary" /> : <RiArrowUpLine className="dropdown-icon-secondary" />}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => (
          <Menu.Item as="li" key={index} className="cursor-pointer hover:text-violet-700 transition" onClick={() => setProperty(property)}>
            {property}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
export default PropertyDropdown;
