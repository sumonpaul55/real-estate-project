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
    const allcountries = housesData.map((house) => {
      return house.country;
    });
    // console.log(allcountries);
    // remove duplicates
    const uniqueCountry = ["Location (any)", ...new Set(allcountries)];
    setCountries(uniqueCountry);
  }, [houses]);
  // call data for Properties
  useEffect(() => {
    const allPropertise = housesData.map((house) => {
      return house.type;
    });
    // console.log(allPropertise);
    // remove duplicates
    const uniqueProperty = ["Property type (any)", ...new Set(allPropertise)];
    setProperties(uniqueProperty);
    // console.log(uniqueProperty);
  }, [houses]);
  const handleSearch = () => {
    setLoading(true);
    // console.log(typeof country);
    // create a function that checks if the string includes "(any)"
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouse = housesData.filter((house) => {
      const housePrice = house.price;
      // if all values are selected
      if (house.country === country && house.type === property && house.price >= minPrice && house.price <= maxPrice) {
        return house;
      }
      // if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      // if country only selected and not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      // if only property selected & if default is false
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }
      // if only price is selected & if default is false
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      // if country and property is selected and not default
      if (!isDefault(country) && !isDefault(property)) {
        if (house.country === country && house.type === property) {
          return house;
        }
      }
      // if country and price is selected and not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      // if property and price is selected and if not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
      // if country property and price is selected and not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price) && house.country === country && house.type === property) {
        return house;
      }
    });
    setTimeout(() => {
      return newHouse.length < 1 ? setHouse([]) : setHouse(newHouse);
      // eslint-disable-next-line no-unreachable
      setLoading(false);
    }, 1000);
  };
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
        handleSearch,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};
export default HouseContextProvider;
