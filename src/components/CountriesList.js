import React from "react";
import CountrieItem from "./CountrieItem";

const CountriesList = ({ listOfCountries }) => {
  return (
    <div className="countrie_list">
      {listOfCountries.map((item, index) => (
        <CountrieItem item={item} key={index} />
      ))}
    </div>
  );
};

export default CountriesList;
