import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HouseContext } from "./HouseContext";
import House from "./House";

const HouseList = () => {
  const { houses } = useContext(HouseContext);
  // console.log(houses);
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
