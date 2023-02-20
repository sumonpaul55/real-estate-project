import React from "react";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
const House = ({ house }) => {
  const { price, image, type, country, address, bedrooms, bathrooms, surface } = house;

  // console.log(price);
  return (
    <div className="shadow-1 bg-white p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto hover:shadow-lg transition">
      <img src={image} className="mb-8" alt="" />
      <div className="flex gap-x-2 mb-4 text-sm">
        <span className="bg-green-500 rounded-full px-4 text-white">{type}</span>
        <h3 className="bg-violet-500 px-3 text-white rounded-full">{country}</h3>
      </div>
      <address className="text-lg font-semibold max-w-[256px]">{address}</address>
      <div className="flex gap-x-4 my-4">
        {/* bedrooms icon */}
        <div className="flex gap-x-1 items-center text-gray-600">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <small>{bedrooms}</small>
        </div>
        {/* bathrooms icon */}
        <div className="flex gap-x-1 items-center text-gray-600">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <small>{bathrooms}</small>
        </div>
        <div className="flex gap-x-1 items-center text-gray-600">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <small>{surface}</small>
        </div>
      </div>
      <span className="text-violet-500">{price}</span>
    </div>
  );
};

export default House;
