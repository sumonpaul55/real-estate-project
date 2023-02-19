import { Menu } from "@headlessui/react";
import React, { useContext, useState } from "react";
import { RiArrowDownLine, RiArrowUpLine, RiMapPinLine } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  // console.log(country);
  const [isopen, setisOpen] = useState(true);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "10000 - 30000",
    },
    {
      value: "10000 - 40000",
    },
  ];
  // console.log(prices);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button onClick={() => setisOpen(!isopen)} className="dropdown-btn w-full text-left">
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isopen ? <RiArrowDownLine className="dropdown-icon-secondary" /> : <RiArrowUpLine className="dropdown-icon-secondary" />}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((actualPrice, index) => (
          <Menu.Item as="li" key={index} className="cursor-pointer hover:text-violet-700 transition" onClick={() => setPrice(actualPrice.value)}>
            {actualPrice.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
export default PriceRangeDropdown;
