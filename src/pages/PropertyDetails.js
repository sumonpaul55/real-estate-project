/* eslint-disable array-callback-return */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { housesData } from "../data";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <div className="container mx-auto min-h-[800px] mb-14 text-left">
      <div className="flex flex-col lg:flex-row lg:items-center lg:items-center lg:justify-between">
        <div className="mb-2">
          <h2 className="text-2xl font-semibold">{house.name}</h2>
          <address className="text-lg mb-4">{house.address}</address>
        </div>
        <div className="lg:mb-4 flex gap-x-2">
          <h3 className="bg-green-500 text-white px-3 rounded-full">{house.type}</h3>
          <address className="bg-violet-500 text-white px-3 rounded-full">{house.country}</address>
        </div>
        <div>
          <span className="text-3xl font-semibold text-violet-600 mt-3 block lg:mt-0">$ {house.price}</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-6 mt-4">
        {/* details left */}
        <div className="max-w-[768px]">
          <div className="mb-8">
            <img src={house.imageLg} alt="" className="rounded" />
          </div>
          <div className="flex gap-x-6 text-violet-700 mb-2">
            <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <small>{house.bedrooms}</small>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <small>{house.bathrooms}</small>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiArea className="text-2xl" />
              <small>{house.surface}</small>
            </div>
          </div>
          <p className="text-sm">{house.description}</p>
        </div>
        {/* agent */}
        <div className="w-full border rounded-lg px-8 py-4 border-gray-300">
          <div className="flex items-center gap-x-4">
            <div className="w-20 h-20 border border-gray-300 rounded-full p-1">
              <img src={house.agent.image} alt="" />
            </div>
            <div className="agetn-description">
              <h3 className="font-bold text-lg">{house.agent.name}</h3>
              <Link to="" className="text-violet-700 text-sm">
                View listing
              </Link>
            </div>
          </div>
          <form action="" className="mt-6 flex flex-col gap-y-8">
            <input
              placeholder="Name*"
              required
              type="text"
              className="focus:border p-2 text-sm border border-gray-300 rounded w-full focus:border-violet-700 outline-none"
            />
            <input
              placeholder="Email*"
              required
              type="text"
              className="focus:border p-2 text-sm border border-gray-300 rounded w-full focus:border-violet-700 outline-none"
            />
            <input
              placeholder="Phone*"
              required
              type="text"
              className="focus:border p-2 text-sm border border-gray-300 rounded w-full focus:border-violet-700 outline-none"
            />
            <textarea
              className="focus:border border p-4 text-sm border-gray-300 rounded w-full focus:border-violet-700 outline-none resize-none h-36 text-gray-500"
              placeholder="Message"
              defaultValue="Hello, I am iterested in modern [apartment]"
            ></textarea>
            <div className="flex gap-2">
              <button className="bg-violet-700 hover:bg-violet-800 text-sm text-white rounded p-3 w-full transition">Send message</button>
              <button className="border border-gray-300 hover:border-violet-600 w-full hover:text-violet-700 p-3 transition rounded">Call</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
