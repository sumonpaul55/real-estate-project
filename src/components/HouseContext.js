import React, { createContext, useEffect, useState } from "react";
//import data
import { housesData } from "../data";
// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [houses, setHouse] = useState(housesData);
  const [country, setCountry] = useState("location (any)");
  // eslint-disable-next-line no-unused-vars
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("property type (any)");
  // eslint-disable-next-line no-unused-vars
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("price range (any)");
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // return all country
  useEffect(() => {
    const allcountries = houses.map((house) => {
      return house.country;
    });
    // console.log(allcountries);
    // remove duplicates
    const uniqueCountry = ["Location (any)", ...new Set(allcountries)];
    setCountries(uniqueCountry);
  }, [houses]);

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};
export default HouseContextProvider;
