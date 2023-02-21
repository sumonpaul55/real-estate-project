import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HouseContext } from "./HouseContext";
import House from "./House";
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  // console.log(houses);

  if (loading) {
    return <ImSpinner2 className="animate-spin text-4xl mx-auto" />;
  }
  if (houses.length < 1) {
    return <h3 className="text-center text-3xl">Nothing found</h3>;
  }
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
