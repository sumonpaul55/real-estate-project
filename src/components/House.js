import React, { createContext, useState } from "react";
//import data
import { housesData } from "../data";
// create context
export const HouseCntext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouse] = useState(housesData);
  const [country, setCountry] = useState("location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("price range (any)");
  const [loading, setLoading] = useState(false);
  return (
    <HouseCntext.Provider
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
    </HouseCntext.Provider>
  );
};

export default HouseContextProvider;
